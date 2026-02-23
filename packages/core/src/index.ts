/**
 * Minions Leads SDK
 *
 * Lead records, company profiles, contact details, and qualification status
 *
 * @module @minions-leads/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Leads.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
