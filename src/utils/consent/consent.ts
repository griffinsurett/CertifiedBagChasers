// src/utils/consent.ts
/**
 * Consent Management Utilities
 * 
 * Pure functions for checking and managing consent that work in both:
 * - Vanilla JavaScript (inline scripts, Astro components)
 * - React components and hooks
 * 
 * Uses cookie storage for consent state (GDPR requirement for persistence)
 */

import { getCookie } from '@/utils/cookies';
import type { CookieConsent, CookieCategory } from '@/components/preferences/consent/types';

/**
 * Get current consent state from cookie
 */
export function getConsent(): CookieConsent | null {
  if (typeof document === 'undefined') return null;
  
  try {
    const consentCookie = getCookie('cookie-consent');
    if (!consentCookie) return null;
    
    return JSON.parse(consentCookie) as CookieConsent;
  } catch (error) {
    console.error('Error parsing consent cookie:', error);
    return null;
  }
}

/**
 * Check if user has given consent for a specific category
 */
export function hasConsentFor(category: CookieCategory): boolean {
  if (typeof document === 'undefined') return false;
  
  // Necessary cookies are always allowed
  if (category === 'necessary') return true;
  
  const consent = getConsent();
  if (!consent) return false;
  
  return consent[category] === true;
}

/**
 * Check if consent has been given (user has made a choice)
 */
export function hasConsented(): boolean {
  if (typeof document === 'undefined') return false;
  return getConsent() !== null;
}

/**
 * Quick inline check for consent (optimized for inline scripts)
 * Returns true if cookie exists without parsing JSON
 */
export function hasConsentCookie(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.includes('cookie-consent=');
}