# Greastro Project - Development Handoff Documentation

## Executive Summary

This document details the major accomplishments and remaining issues for the Greastro marketing website project. We successfully solved critical circular dependency issues and fixed menu hierarchy generation, but the query system requires signature alignment to match the original working implementation.

---

## Problem We Solved

### Original Issue
MDX files in Astro's Content Layer couldn't import and render content collections because it created circular dependencies. When you tried to import `getCollection` or query functions in MDX, the build would fail because MDX files are part of the content collection system themselves.

### Goal
Enable MDX content files to dynamically render other content (like displaying a grid of services within an FAQ page) without circular dependencies.

### Example Use Case
```mdx
---
title: "FAQ"
---

import { ContentRenderer } from '@/components/ContentRenderer';
import { query } from '@/utils/query';

export const services = await query('services').all();

# Frequently Asked Questions

<ContentRenderer 
  entries={services}
  variant="grid"
/>
```

---

## Solution 1: Lazy-Loading Content Collections ✅ WORKING

### What We Did
We refactored the entire query system to use **dynamic imports** instead of module-level imports of `astro:content`.

### Before (Broken)
```typescript
// ❌ This created circular dependencies
import { getCollection } from 'astro:content';

export async function query(collection) {
  const entries = await getCollection(collection);
  // ...
}
```

### After (Working)
```typescript
// ✅ Lazy import inside function
export async function query(collection) {
  const { getCollection } = await import('astro:content');
  const entries = await getCollection(collection);
  // ...
}
```

### Files Modified
- `src/utils/query/query.ts` - Main query builder
- `src/utils/query/graph.ts` - Relationship graph builder
- `src/utils/query/relations.ts` - Relations resolver
- `src/utils/query/hierarchy.ts` - Hierarchy utilities
- `src/utils/query/helpers.ts` - Helper functions

### Why This Works
By delaying the import of `astro:content` until the function is actually called (at runtime), we break the circular dependency that occurred during the build/initialization phase. The content collections are fully initialized before any MDX file tries to query them.

### Key Pattern
```typescript
// Always use this pattern in any function that needs astro:content
export async function anyFunction() {
  const { getCollection, getEntry } = await import('astro:content');
  // Now use getCollection/getEntry safely
}
```

---

## Solution 2: Fixed MenuItemsLoader ✅ WORKING

### Problem
The `MenuItemsLoader` wasn't correctly parsing YAML frontmatter when `addToMenu` had multiple configurations with multiple properties:

```yaml
addToMenu:
  - menu: "main-menu"
    order: 2
  - menu: "main-menu"
    parent: "about-us"
```

It was only seeing 1 config instead of 2, breaking menu hierarchies.

### What We Did

#### Fixed YAML Parser
**File**: `src/utils/filesystem/frontmatter.ts`

Updated the `parseYamlArray` function to properly handle multi-line objects in arrays:

```typescript
// ✅ FIX: Handle multiline objects in arrays
if (afterDash && afterDash.includes(':')) {
  const obj: Record<string, any> = {};
  
  // Parse the first property on the dash line
  const colonIndex = afterDash.indexOf(':');
  const key = afterDash.substring(0, colonIndex).trim();
  const value = afterDash.substring(colonIndex + 1).trim();
  obj[key] = parseYamlValue(value);
  
  // Move to next line
  i++;
  
  // ✅ Keep reading properties until we hit another dash at same level
  while (i < lines.length) {
    const nextLine = lines[i];
    const nextTrimmed = nextLine.trim();
    const nextIndent = nextLine.length - nextLine.trimStart().length;
    
    // Stop if we hit empty line or comment
    if (!nextTrimmed || nextTrimmed.startsWith('#')) {
      i++;
      continue;
    }
    
    // Stop if we're back at or before the array indent
    if (nextIndent <= baseIndent) {
      break;
    }
    
    // Stop if we hit another array item
    if (nextTrimmed.startsWith('-')) {
      break;
    }
    
    // This should be another property of the current object
    if (nextTrimmed.includes(':')) {
      const propColonIndex = nextTrimmed.indexOf(':');
      const propKey = nextTrimmed.substring(0, propColonIndex).trim();
      const propValue = nextTrimmed.substring(propColonIndex + 1).trim();
      obj[propKey] = parseYamlValue(propValue);
      i++;
    } else {
      // Not a valid property, stop
      break;
    }
  }
  
  array.push(obj);
  continue;
}
```

#### Fixed Nested Parent ID Generation
**File**: `src/utils/loaders/MenuItemsLoader.ts`

```typescript
// ✅ Only add index suffix if there's no parent (parent makes it unique)
const baseId = menuConfig.id || 
  (configs.length > 1 && !menuConfig.parent ? `${collection}-${i}` : collection);
```

### Why This Matters

When you have multiple `addToMenu` configs:
```yaml
addToMenu:
  - menu: "main-menu"
  - menu: "main-menu"
    parent: "about-us"
```

**Old behavior** (broken):
- First config: `contact-us-0`
- Second config: `contact-us-1-about-us`
- Reference `parent: "contact-us-about-us"` wouldn't work ❌

**New behavior** (working):
- First config: `contact-us` (no parent, no index needed)
- Second config: `contact-us-about-us` (parent makes it unique)
- Reference `parent: "contact-us-about-us"` works perfectly ✅

---

## Result: What Now Works

With these fixes, you can now:

1. **Import and query collections in MDX files**:
```mdx
export const services = await query('services').all();
```

2. **Render dynamic content grids in MDX**:
```mdx
<ContentRenderer entries={services} variant="grid" />
```

3. **Create complex menu hierarchies**:
```yaml
# Collection: contact-us
addToMenu:
  - menu: "main-menu"
    order: 2
  - menu: "main-menu"
    parent: "about-us"

# Item: ecommerce-platform
parent: "contact-us-about-us"  # This now works!
```

---

## What Still Needs Work ⚠️

### Query System Issues

The query system has **function signature inconsistencies** between the original working implementation and what's currently deployed. This is causing the production build to fail on the example page.

#### Problem Areas

1. **Relations Functions**
   - Some functions expect entry objects: `getRelations(entry, options)`
   - Others expect collection+id: `getRelations(collection, id, options)`
   - **Inconsistency breaks the build**

2. **Hierarchy Functions**
   - Similar inconsistency between entry-based and collection+id-based signatures
   - Example: `getTree(collection, entryId, maxDepth)` vs `getTree(collection, graph)`

3. **Return Types**
   - `getRelations()` should return: `{ references: Relation[], referencedBy: Relation[], indirect: Relation[] }`
   - Current implementation may return different structure
   - The `example.astro` page expects the correct structure: `relations?.references.length`

#### Specific Error from Production Build
```
TypeError: Cannot read properties of undefined (reading 'length')
at file:///vercel/path0/dist/pages/example.astro.mjs?time=1762822426671:169:276

// Line trying to access:
relations?.references.length
```

This indicates `getRelations()` is not returning the expected `{ references, referencedBy, indirect }` structure.

---

## Reference Implementation

### Working Query Directory Structure

The **original working implementation** is documented in the conversation history (document 11). Key characteristics:

#### Function Signatures (Original Working Version)

```typescript
// Relations - takes ENTRY objects
export async function getRelations<T>(
  entry: CollectionEntry<T>,
  options: { graph?, fields?, maxDepth? }
): Promise<RelationMap>

// Hierarchy - takes ENTRY objects
export async function getParent<T>(
  entry: CollectionEntry<T>,
  graph?: RelationshipGraph
): Promise<CollectionEntry<T> | null>

export async function getChildren<T>(
  entry: CollectionEntry<T>,
  graph?: RelationshipGraph
): Promise<CollectionEntry<T>[]>

export async function getTree<T>(
  collection: T,
  graph?: RelationshipGraph
): Promise<TreeNode<T>[]>
```

#### Return Types (Original Working Version)

```typescript
// RelationMap structure
export interface RelationMap {
  references: Relation[];      // Outgoing references
  referencedBy: Relation[];    // Incoming references
  indirect: Relation[];        // Multi-hop relations
}

// Graph indexes structure
export interface RelationshipGraph {
  indexes: {
    byCollection: Map<CollectionKey, string[]>;
    byParent: Map<string, string[]>;
    byReference: Map<string, Relation[]>;  // Array of Relation objects
  };
}
```

### How Example Page Uses It

```typescript
// src/pages/example.astro
const blogWithRelations = await query('blog')
  .limit(3)
  .withRelations(true, 2)
  .get();

// Later in template:
{blogWithRelations.entries.map(entry => {
  const relations = blogWithRelations.relations?.get(`blog:${entry.id}`);
  return (
    <div>
      <span>{relations?.references.length || 0}</span>
      <span>{relations?.referencedBy.length || 0}</span>
      <span>{relations?.indirect.length || 0}</span>
    </div>
  );
})}
```

**This expects**: `relations` to be a `RelationMap` object with three arrays.

---

## Architecture Overview

### Content Layer with Lazy Loading

```
┌─────────────────────────────────────────────┐
│  MDX Files (Content Collections)           │
│  - Can now import query functions           │
│  - Use dynamic imports to avoid circular    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Query System (Lazy Loading Pattern)        │
│  - All astro:content imports are dynamic    │
│  - Functions delay imports until runtime    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Astro Content Layer                        │
│  - Fully initialized before queries run     │
│  - No circular dependencies                 │
└─────────────────────────────────────────────┘
```

### Menu System Flow

```
┌─────────────────────────────────────────────┐
│  Frontmatter in MDX files                   │
│  addToMenu:                                 │
│    - menu: "main-menu"                      │
│      order: 2                               │
│    - menu: "main-menu"                      │
│      parent: "about-us"                     │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  YAML Parser (frontmatter.ts)               │
│  - Correctly parses multi-property arrays   │
│  - Each object fully captured               │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  MenuItemsLoader                            │
│  - Generates unique IDs based on hierarchy  │
│  - Creates: contact-us, contact-us-about-us │
│  - Enables nested parent references         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Menu Items Collection                      │
│  - Proper hierarchical structure            │
│  - Ready for navigation components          │
└─────────────────────────────────────────────┘
```

---

## Key Files Modified

### ✅ WORKING (No changes needed)
- `src/utils/filesystem/frontmatter.ts` - YAML parser for multi-property arrays
- `src/utils/loaders/MenuItemsLoader.ts` - Menu hierarchy generation

### ⚠️ NEEDS ALIGNMENT (Function signatures)
- `src/utils/query/query.ts` - Main query builder
- `src/utils/query/relations.ts` - Relations resolver (return type issue)
- `src/utils/query/hierarchy.ts` - Hierarchy utilities (signature issue)
- `src/utils/query/graph.ts` - Graph builder (storage structure)
- `src/utils/query/types.ts` - Type definitions (RelationMap type)

---

## Tech Stack

- **Framework**: Astro v5.15.3
- **UI Library**: React (for client-side components)
- **Styling**: Tailwind CSS
- **Content**: MDX with Astro Content Layer
- **Type Safety**: TypeScript with Zod schemas

---

## Testing Strategy

### What Works (Verified)
1. ✅ MDX files can import query functions
2. ✅ Dynamic imports prevent circular dependencies
3. ✅ YAML parser handles complex array structures
4. ✅ Menu hierarchies generate correct IDs
5. ✅ Development server runs without errors

