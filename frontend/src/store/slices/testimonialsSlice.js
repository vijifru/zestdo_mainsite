// Testimonials Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTestimonials, getTestimonialsByRole } from '../../services/api';

// Async Thunks
export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTestimonials();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch testimonials');
    }
  }
);

export const fetchTestimonialsByRole = createAsyncThunk(
  'testimonials/fetchTestimonialsByRole',
  async (role, { rejectWithValue }) => {
    try {
      const data = await getTestimonialsByRole(role);
      return { role, data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch testimonials');
    }
  }
);

// Slice
const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    items: [],
    byRole: {},
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all testimonials
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch testimonials by role
      .addCase(fetchTestimonialsByRole.fulfilled, (state, action) => {
        state.byRole[action.payload.role] = action.payload.data;
      });
  },
});

export const { clearError } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
