# Subscription Plans Routes

from fastapi import APIRouter, HTTPException
from typing import List
from models.schemas import SubscriptionPlan
from services.database import get_collection

router = APIRouter(prefix="/subscription-plans", tags=["Subscription Plans"])


@router.get("", response_model=List[SubscriptionPlan])
async def get_subscription_plans():
    """Get all subscription plans"""
    return get_collection("subscriptionPlans")


@router.get("/popular")
async def get_popular_plan():
    """Get the most popular plan"""
    plans = get_collection("subscriptionPlans")
    for plan in plans:
        if plan.get("popular"):
            return plan
    raise HTTPException(status_code=404, detail="No popular plan found")
