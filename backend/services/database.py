# Database Service
# Handles all mock.json read/write operations

import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

DATA_PATH = Path(__file__).parent.parent / 'data' / 'mock.json'


def load_data() -> Dict[str, Any]:
    """Load all data from mock.json"""
    try:
        with open(DATA_PATH, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        logger.error(f"Data file not found: {DATA_PATH}")
        return {}
    except json.JSONDecodeError as e:
        logger.error(f"Error parsing JSON: {e}")
        return {}


def save_data(data: Dict[str, Any]) -> bool:
    """Save data to mock.json"""
    try:
        with open(DATA_PATH, 'w') as f:
            json.dump(data, f, indent=2)
        return True
    except Exception as e:
        logger.error(f"Error saving data: {e}")
        return False


def get_collection(collection_name: str) -> List[Dict]:
    """Get a specific collection from the database"""
    data = load_data()
    return data.get(collection_name, [])


def add_to_collection(collection_name: str, item: Dict) -> bool:
    """Add an item to a collection"""
    data = load_data()
    if collection_name not in data:
        data[collection_name] = []
    data[collection_name].append(item)
    return save_data(data)


def find_by_id(collection_name: str, item_id: Any) -> Optional[Dict]:
    """Find an item by ID in a collection"""
    collection = get_collection(collection_name)
    for item in collection:
        if item.get('id') == item_id:
            return item
    return None


def find_by_field(collection_name: str, field: str, value: Any) -> List[Dict]:
    """Find items by a specific field value"""
    collection = get_collection(collection_name)
    return [item for item in collection if item.get(field) == value]


def get_stats() -> Dict[str, int]:
    """Get platform statistics"""
    data = load_data()
    return data.get('stats', {})
