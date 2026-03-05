# Activities Routes

from fastapi import APIRouter, HTTPException
from typing import List
from models.schemas import Activity
from services.database import get_collection, find_by_id

router = APIRouter(prefix="/activities", tags=["Activities"])


@router.get("", response_model=List[Activity])
async def get_activities():
    """Get all activities"""
    return get_collection("activities")


@router.get("/{activity_id}", response_model=Activity)
async def get_activity(activity_id: int):
    """Get activity by ID"""
    activity = find_by_id("activities", activity_id)
    if not activity:
        raise HTTPException(status_code=404, detail="Activity not found")
    return activity
