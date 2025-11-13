// src/utils/scriptManager.ts
/**
 * Script Management Utilities
 * 
 * Handles blocking and enabling of third-party scripts based on consent.
 * Supports both regular scripts and Partytown integration.
 */

import { hasConsentFor } from '@/utils/consent/consent';
import type { CookieCategory } from '@/components/preferences/consent/types';

/**
 * Script element with consent attributes
 */
interface ConsentScript extends HTMLScriptElement {
  dataset: {
    consent?: CookieCategory;
    partytown?: string;
    consentEnabled?: string;
  };
}

/**
 * Enable a single blocked script
 */
function enableScript(blockedScript: ConsentScript): void {
  // Don't enable already-enabled scripts
  if (blockedScript.dataset.consentEnabled === 'true') {
    return;
  }
  
  // Create new script element
  const newScript = document.createElement('script');
  
  // Copy all attributes except type
  Array.from(blockedScript.attributes).forEach(attr => {
    if (attr.name !== 'type') {
      newScript.setAttribute(attr.name, attr.value);
    }
  });
  
  // Set correct type
  newScript.type = 'text/javascript';
  
  // Handle Partytown integration
  if (blockedScript.dataset.partytown === 'true') {
    newScript.type = 'text/partytown';
  }
  
  // Copy inline content if present
  if (blockedScript.textContent) {
    newScript.textContent = blockedScript.textContent;
  }
  
  // Mark original as enabled to prevent duplicate execution
  blockedScript.dataset.consentEnabled = 'true';
  
  // Insert new script after the blocked one
  blockedScript.parentNode?.insertBefore(newScript, blockedScript.nextSibling);
  
  console.log(`✅ Enabled ${blockedScript.dataset.consent} script:`, blockedScript.src || 'inline');
}

/**
 * Find all blocked scripts for a specific consent category
 */
function findBlockedScripts(category: CookieCategory): ConsentScript[] {
  const selector = `script[type="text/plain"][data-consent="${category}"]`;
  return Array.from(document.querySelectorAll(selector)) as ConsentScript[];
}

/**
 * Enable all scripts for a given consent category
 */
export function enableScriptsForCategory(category: CookieCategory): void {
  if (typeof document === 'undefined') return;
  
  const blockedScripts = findBlockedScripts(category);
  
  if (blockedScripts.length === 0) {
    console.log(`ℹ️  No blocked scripts found for category: ${category}`);
    return;
  }
  
  console.log(`🔓 Enabling ${blockedScripts.length} script(s) for category: ${category}`);
  
  blockedScripts.forEach(script => {
    enableScript(script);
  });
}

/**
 * Check consent and enable scripts for all consented categories
 * This is called on page load and when consent changes
 */
export function enableConsentedScripts(): void {
  if (typeof document === 'undefined') return;
  
  const categories: CookieCategory[] = ['necessary', 'functional', 'performance', 'targeting'];
  
  categories.forEach(category => {
    if (hasConsentFor(category)) {
      enableScriptsForCategory(category);
    }
  });
}

/**
 * Initialize script manager - call this once on page load
 */
export function initScriptManager(): void {
  if (typeof document === 'undefined') return;
  
  // Enable scripts based on current consent
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      enableConsentedScripts();
    });
  } else {
    enableConsentedScripts();
  }
  
  console.log('📜 Script manager initialized');
}