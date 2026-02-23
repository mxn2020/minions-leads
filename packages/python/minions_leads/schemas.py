"""
Minions Leads SDK — Type Schemas
Custom MinionType schemas for Minions Leads.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

lead_type = MinionType(
    id="leads-lead",
    name="Lead",
    slug="lead",
    description="A discovered potential client.",
    icon="🎯",
    schema=[
        FieldDefinition(name="companyName", type="string", label="companyName"),
        FieldDefinition(name="website", type="string", label="website"),
        FieldDefinition(name="industry", type="string", label="industry"),
        FieldDefinition(name="territoryId", type="string", label="territoryId"),
        FieldDefinition(name="contactName", type="string", label="contactName"),
        FieldDefinition(name="contactEmail", type="string", label="contactEmail"),
        FieldDefinition(name="contactPhone", type="string", label="contactPhone"),
        FieldDefinition(name="leadScore", type="number", label="leadScore"),
        FieldDefinition(name="qualificationStatus", type="select", label="qualificationStatus"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="discoveredAt", type="string", label="discoveredAt"),
        FieldDefinition(name="source", type="string", label="source"),
    ],
)

lead_enrichment_type = MinionType(
    id="leads-lead-enrichment",
    name="Lead enrichment",
    slug="lead-enrichment",
    description="Additional data gathered about a lead.",
    icon="📋",
    schema=[
        FieldDefinition(name="leadId", type="string", label="leadId"),
        FieldDefinition(name="companySize", type="select", label="companySize"),
        FieldDefinition(name="revenue", type="string", label="revenue"),
        FieldDefinition(name="techStack", type="string", label="techStack"),
        FieldDefinition(name="socialProfiles", type="string", label="socialProfiles"),
        FieldDefinition(name="enrichedAt", type="string", label="enrichedAt"),
        FieldDefinition(name="enrichedBy", type="string", label="enrichedBy"),
    ],
)

custom_types: list[MinionType] = [
    lead_type,
    lead_enrichment_type,
]

