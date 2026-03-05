# Stats & General Data Routes

from fastapi import APIRouter
from typing import List
from models.schemas import UserRole, WhyZestDoPoint, Community, Stats
from services.database import get_collection, get_stats

router = APIRouter(tags=["General"])


@router.get("/user-roles", response_model=List[UserRole])
async def get_user_roles():
    """Get all user roles and their benefits"""
    return get_collection("userRoles")


@router.get("/why-zestdo", response_model=List[WhyZestDoPoint])
async def get_why_zestdo():
    """Get why ZestDo comparison points"""
    return get_collection("whyZestDoPoints")


@router.get("/communities", response_model=List[Community])
async def get_communities():
    """Get all partner communities"""
    return get_collection("communities")


@router.get("/stats", response_model=Stats)
async def get_platform_stats():
    """Get platform statistics"""
    return get_stats()
