# Pydantic Models/Schemas
# All request and response models

from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime


# ============================================
# Activity Models
# ============================================

class Activity(BaseModel):
    id: int
    name: str
    description: str
    icon: str
    color: str
    image: str


# ============================================
# Testimonial Models
# ============================================

class Testimonial(BaseModel):
    id: int
    role: str
    name: str
    location: str
    text: str
    rating: int
    image: str


# ============================================
# User Role Models
# ============================================

class UserRole(BaseModel):
    id: int
    role: str
    icon: str
    benefits: List[str]
    cta: str


# ============================================
# Why ZestDo Models
# ============================================

class WhyZestDoPoint(BaseModel):
    problem: str
    solution: str


# ============================================
# Subscription Plan Models
# ============================================

class SubscriptionPlan(BaseModel):
    id: int
    duration: str
    price: str
    priceValue: int
    features: List[str]
    popular: bool
    savings: Optional[str] = None


# ============================================
# Community Models
# ============================================

class Community(BaseModel):
    id: int
    name: str
    location: str
    activitiesCount: int
    trainersCount: int
    image: str


# ============================================
# Stats Models
# ============================================

class Stats(BaseModel):
    apartments: int
    trainers: int
    happyKids: int
    activityCategories: int


# ============================================
# Contact Form Models
# ============================================

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    userType: Optional[str] = "other"
    subject: str
    message: str


class ContactSubmission(ContactSubmissionCreate):
    id: str
    createdAt: str
    status: str = "pending"


# ============================================
# Waitlist Models
# ============================================

class WaitlistSignupCreate(BaseModel):
    name: Optional[str] = None
    email: str
    phone: Optional[str] = None
    userType: Optional[str] = "parent"
    apartmentName: Optional[str] = None
    city: Optional[str] = "Bengaluru"


class WaitlistSignup(WaitlistSignupCreate):
    id: str
    createdAt: str


# ============================================
# Trainer Application Models
# ============================================

class TrainerApplicationCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    expertise: str
    experience: Optional[str] = None
    city: Optional[str] = "Bengaluru"
    message: Optional[str] = None


class TrainerApplication(TrainerApplicationCreate):
    id: str
    createdAt: str
    status: str = "pending"


# ============================================
# Apartment Inquiry Models
# ============================================

class ApartmentInquiryCreate(BaseModel):
    contactName: str
    email: str
    phone: Optional[str] = None
    apartmentName: str
    city: Optional[str] = "Bengaluru"
    unitsCount: Optional[int] = None
    message: Optional[str] = None


class ApartmentInquiry(ApartmentInquiryCreate):
    id: str
    createdAt: str
    status: str = "pending"


# ============================================
# Response Models
# ============================================

class SuccessResponse(BaseModel):
    success: bool = True
    message: str


class ErrorResponse(BaseModel):
    error: str
    detail: Optional[str] = None
