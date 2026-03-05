// Contact Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitContactForm, joinWaitlist, submitTrainerApplication, submitApartmentInquiry } from '../../services/api';

// Async Thunks
export const submitContact = createAsyncThunk(
  'contact/submitContact',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await submitContactForm(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to submit form');
    }
  }
);

export const submitWaitlist = createAsyncThunk(
  'contact/submitWaitlist',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await joinWaitlist(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || error.response?.data?.error || 'Failed to join waitlist');
    }
  }
);

export const submitTrainer = createAsyncThunk(
  'contact/submitTrainer',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await submitTrainerApplication(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to submit application');
    }
  }
);

export const submitApartment = createAsyncThunk(
  'contact/submitApartment',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await submitApartmentInquiry(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to submit inquiry');
    }
  }
);

// Slice
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactForm: {
      loading: false,
      success: false,
      error: null,
      message: null,
    },
    waitlistForm: {
      loading: false,
      success: false,
      error: null,
      message: null,
    },
    trainerForm: {
      loading: false,
      success: false,
      error: null,
      message: null,
    },
    apartmentForm: {
      loading: false,
      success: false,
      error: null,
      message: null,
    },
  },
  reducers: {
    resetContactForm: (state) => {
      state.contactForm = { loading: false, success: false, error: null, message: null };
    },
    resetWaitlistForm: (state) => {
      state.waitlistForm = { loading: false, success: false, error: null, message: null };
    },
    resetTrainerForm: (state) => {
      state.trainerForm = { loading: false, success: false, error: null, message: null };
    },
    resetApartmentForm: (state) => {
      state.apartmentForm = { loading: false, success: false, error: null, message: null };
    },
  },
  extraReducers: (builder) => {
    builder
      // Contact form
      .addCase(submitContact.pending, (state) => {
        state.contactForm.loading = true;
        state.contactForm.error = null;
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.contactForm.loading = false;
        state.contactForm.success = true;
        state.contactForm.message = action.payload.message;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.contactForm.loading = false;
        state.contactForm.error = action.payload;
      })
      // Waitlist form
      .addCase(submitWaitlist.pending, (state) => {
        state.waitlistForm.loading = true;
        state.waitlistForm.error = null;
      })
      .addCase(submitWaitlist.fulfilled, (state, action) => {
        state.waitlistForm.loading = false;
        state.waitlistForm.success = true;
        state.waitlistForm.message = action.payload.message;
      })
      .addCase(submitWaitlist.rejected, (state, action) => {
        state.waitlistForm.loading = false;
        state.waitlistForm.error = action.payload;
      })
      // Trainer form
      .addCase(submitTrainer.pending, (state) => {
        state.trainerForm.loading = true;
        state.trainerForm.error = null;
      })
      .addCase(submitTrainer.fulfilled, (state, action) => {
        state.trainerForm.loading = false;
        state.trainerForm.success = true;
        state.trainerForm.message = action.payload.message;
      })
      .addCase(submitTrainer.rejected, (state, action) => {
        state.trainerForm.loading = false;
        state.trainerForm.error = action.payload;
      })
      // Apartment form
      .addCase(submitApartment.pending, (state) => {
        state.apartmentForm.loading = true;
        state.apartmentForm.error = null;
      })
      .addCase(submitApartment.fulfilled, (state, action) => {
        state.apartmentForm.loading = false;
        state.apartmentForm.success = true;
        state.apartmentForm.message = action.payload.message;
      })
      .addCase(submitApartment.rejected, (state, action) => {
        state.apartmentForm.loading = false;
        state.apartmentForm.error = action.payload;
      });
  },
});

export const { resetContactForm, resetWaitlistForm, resetTrainerForm, resetApartmentForm } = contactSlice.actions;
export default contactSlice.reducer;
