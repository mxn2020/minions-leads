"""
Minions Leads Python SDK

Lead records, company profiles, contact details, and qualification status
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Leads.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
