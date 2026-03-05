from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import json
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Load mock data
MOCK_DATA_PATH = ROOT_DIR / 'data' / 'mock.json'

def load_data():
    try:
        with open(MOCK_DATA_PATH, 'r') as f:
            return json.load(f)
    except Exception as e:
        logging.error(f"Error loading mock data: {e}")
        return {}

def save_data(data):
    try:
        with open(MOCK_DATA_PATH, 'w') as f:
            json.dump(data, f, indent=2)
        return True
    except Exception as e:
        logging.error(f"Error saving mock data: {e}")
        return False

# Create the main app
app = FastAPI(title="ZestDo API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ============================================
# Pydantic Models
# ============================================

class Activity(BaseModel):
    id: int
    name: str
    description: str
    icon: str
    color: str
    image: str

class Testimonial(BaseModel):
    id: int
    role: str
    name: str
    location: str
    text: str
    rating: int
    image: str

class UserRole(BaseModel):
    id: int
    role: str
    icon: str
    benefits: List[str]
    cta: str

class WhyZestDoPoint(BaseModel):
    problem: str
    solution: str

class SubscriptionPlan(BaseModel):
    id: int
    duration: str
    price: str
    priceValue: int
    features: List[str]
    popular: bool
    savings: Optional[str] = None

class Community(BaseModel):
    id: int
    name: str
    location: str
    activitiesCount: int
    trainersCount: int
    image: str

class Stats(BaseModel):
    apartments: int
    trainers: int
    happyKids: int
    activityCategories: int

class ContactSubmission(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    userType: Optional[str] = "other"
    subject: str
    message: str

class WaitlistSignup(BaseModel):
    name: Optional[str] = None
    email: str
    phone: Optional[str] = None
    userType: Optional[str] = "parent"
    apartmentName: Optional[str] = None
    city: Optional[str] = "Bengaluru"

class TrainerApplication(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    expertise: str
    experience: Optional[str] = None
    city: Optional[str] = "Bengaluru"
    message: Optional[str] = None

class ApartmentInquiry(BaseModel):
    contactName: str
    email: str
    phone: Optional[str] = None
    apartmentName: str
    city: Optional[str] = "Bengaluru"
    unitsCount: Optional[int] = None
    message: Optional[str] = None

# ============================================
# API Routes
# ============================================

@api_router.get("/")
async def root():
    return {"message": "ZestDo API is running!", "timestamp": datetime.now(timezone.utc).isoformat()}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

# ============================================
# Activities Routes
# ============================================

@api_router.get("/activities", response_model=List[Activity])
async def get_activities():
    data = load_data()
    return data.get("activities", [])

@api_router.get("/activities/{activity_id}", response_model=Activity)
async def get_activity(activity_id: int):
    data = load_data()
    activities = data.get("activities", [])
    for activity in activities:
        if activity["id"] == activity_id:
            return activity
    raise HTTPException(status_code=404, detail="Activity not found")

# ============================================
# Testimonials Routes
# ============================================

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    data = load_data()
    return data.get("testimonials", [])

@api_router.get("/testimonials/role/{role}")
async def get_testimonials_by_role(role: str):
    data = load_data()
    testimonials = data.get("testimonials", [])
    filtered = [t for t in testimonials if t["role"].lower() == role.lower()]
    return filtered

# ============================================
# User Roles Routes
# ============================================

@api_router.get("/user-roles", response_model=List[UserRole])
async def get_user_roles():
    data = load_data()
    return data.get("userRoles", [])

# ============================================
# Why ZestDo Points Routes
# ============================================

@api_router.get("/why-zestdo", response_model=List[WhyZestDoPoint])
async def get_why_zestdo():
    data = load_data()
    return data.get("whyZestDoPoints", [])

# ============================================
# Subscription Plans Routes
# ============================================

@api_router.get("/subscription-plans", response_model=List[SubscriptionPlan])
async def get_subscription_plans():
    data = load_data()
    return data.get("subscriptionPlans", [])

@api_router.get("/subscription-plans/popular")
async def get_popular_plan():
    data = load_data()
    plans = data.get("subscriptionPlans", [])
    for plan in plans:
        if plan.get("popular"):
            return plan
    raise HTTPException(status_code=404, detail="No popular plan found")

# ============================================
# Communities Routes
# ============================================

@api_router.get("/communities", response_model=List[Community])
async def get_communities():
    data = load_data()
    return data.get("communities", [])

# ============================================
# Stats Routes
# ============================================

@api_router.get("/stats", response_model=Stats)
async def get_stats():
    data = load_data()
    return data.get("stats", {})

# ============================================
# Contact Form Routes
# ============================================

@api_router.post("/contact")
async def submit_contact(submission: ContactSubmission):
    data = load_data()
    
    new_submission = {
        "id": str(uuid.uuid4()),
        "name": submission.name,
        "email": submission.email,
        "phone": submission.phone,
        "userType": submission.userType,
        "subject": submission.subject,
        "message": submission.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    if "contactSubmissions" not in data:
        data["contactSubmissions"] = []
    
    data["contactSubmissions"].append(new_submission)
    save_data(data)
    
    return {
        "success": True,
        "message": "Thank you for contacting us! We will get back to you within 24 hours.",
        "submission": new_submission
    }

@api_router.get("/contact")
async def get_contact_submissions():
    data = load_data()
    return data.get("contactSubmissions", [])

# ============================================
# Waitlist Routes
# ============================================

@api_router.post("/waitlist")
async def join_waitlist(signup: WaitlistSignup):
    data = load_data()
    
    # Check if email already exists
    existing = [w for w in data.get("waitlistSignups", []) if w["email"] == signup.email]
    if existing:
        raise HTTPException(status_code=400, detail="This email is already on the waitlist")
    
    new_signup = {
        "id": str(uuid.uuid4()),
        "name": signup.name,
        "email": signup.email,
        "phone": signup.phone,
        "userType": signup.userType,
        "apartmentName": signup.apartmentName,
        "city": signup.city,
        "createdAt": datetime.now(timezone.utc).isoformat()
    }
    
    if "waitlistSignups" not in data:
        data["waitlistSignups"] = []
    
    data["waitlistSignups"].append(new_signup)
    save_data(data)
    
    return {
        "success": True,
        "message": "You have been added to the waitlist! We will notify you when we launch in your area.",
        "signup": new_signup
    }

@api_router.get("/waitlist/count")
async def get_waitlist_count():
    data = load_data()
    return {"count": len(data.get("waitlistSignups", []))}

# ============================================
# Trainer Application Routes
# ============================================

@api_router.post("/trainer-applications")
async def submit_trainer_application(application: TrainerApplication):
    data = load_data()
    
    new_application = {
        "id": str(uuid.uuid4()),
        "name": application.name,
        "email": application.email,
        "phone": application.phone,
        "expertise": application.expertise,
        "experience": application.experience,
        "city": application.city,
        "message": application.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    if "trainerApplications" not in data:
        data["trainerApplications"] = []
    
    data["trainerApplications"].append(new_application)
    save_data(data)
    
    return {
        "success": True,
        "message": "Thank you for your application! Our team will review it and get back to you within 48 hours.",
        "application": new_application
    }

# ============================================
# Apartment Partnership Routes
# ============================================

@api_router.post("/apartment-inquiries")
async def submit_apartment_inquiry(inquiry: ApartmentInquiry):
    data = load_data()
    
    new_inquiry = {
        "id": str(uuid.uuid4()),
        "contactName": inquiry.contactName,
        "email": inquiry.email,
        "phone": inquiry.phone,
        "apartmentName": inquiry.apartmentName,
        "city": inquiry.city,
        "unitsCount": inquiry.unitsCount,
        "message": inquiry.message,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "status": "pending"
    }
    
    if "apartmentInquiries" not in data:
        data["apartmentInquiries"] = []
    
    data["apartmentInquiries"].append(new_inquiry)
    save_data(data)
    
    return {
        "success": True,
        "message": "Thank you for your interest in partnering with ZestDo! Our team will contact you within 24 hours.",
        "inquiry": new_inquiry
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
