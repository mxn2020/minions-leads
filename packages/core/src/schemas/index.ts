/**
 * @module @minions-leads/sdk/schemas
 * Custom MinionType schemas for Minions Leads.
 */

import type { MinionType } from 'minions-sdk';

export const leadType: MinionType = {
  id: 'leads-lead',
  name: 'Lead',
  slug: 'lead',
  description: 'A discovered potential client.',
  icon: '🎯',
  schema: [
    { name: 'companyName', type: 'string', label: 'companyName' },
    { name: 'website', type: 'string', label: 'website' },
    { name: 'industry', type: 'string', label: 'industry' },
    { name: 'territoryId', type: 'string', label: 'territoryId' },
    { name: 'contactName', type: 'string', label: 'contactName' },
    { name: 'contactEmail', type: 'string', label: 'contactEmail' },
    { name: 'contactPhone', type: 'string', label: 'contactPhone' },
    { name: 'leadScore', type: 'number', label: 'leadScore' },
    { name: 'qualificationStatus', type: 'select', label: 'qualificationStatus' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'discoveredAt', type: 'string', label: 'discoveredAt' },
    { name: 'source', type: 'string', label: 'source' },
  ],
};

export const leadenrichmentType: MinionType = {
  id: 'leads-lead-enrichment',
  name: 'Lead enrichment',
  slug: 'lead-enrichment',
  description: 'Additional data gathered about a lead.',
  icon: '📋',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'companySize', type: 'select', label: 'companySize' },
    { name: 'revenue', type: 'string', label: 'revenue' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'socialProfiles', type: 'string', label: 'socialProfiles' },
    { name: 'enrichedAt', type: 'string', label: 'enrichedAt' },
    { name: 'enrichedBy', type: 'string', label: 'enrichedBy' },
  ],
};

export const customTypes: MinionType[] = [
  leadType,
  leadenrichmentType,
];

