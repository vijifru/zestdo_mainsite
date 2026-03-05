# Testimonials Routes

from fastapi import APIRouter
from typing import List
from models.schemas import Testimonial
from services.database import get_collection, find_by_field

router = APIRouter(prefix="/testimonials", tags=["Testimonials"])


@router.get("", response_model=List[Testimonial])
async def get_testimonials():
    """Get all testimonials"""
    return get_collection("testimonials")


@router.get("/role/{role}")
async def get_testimonials_by_role(role: str):
    """Get testimonials by role (Parent, Trainer, Apartment Admin)"""
    testimonials = get_collection("testimonials")
    filtered = [t for t in testimonials if t.get("role", "").lower() == role.lower()]
    return filtered
