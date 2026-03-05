// Subscription Plans Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubscriptionPlans, getPopularPlan } from '../../services/api';

// Async Thunks
export const fetchPlans = createAsyncThunk(
  'plans/fetchPlans',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSubscriptionPlans();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch plans');
    }
  }
);

export const fetchPopularPlan = createAsyncThunk(
  'plans/fetchPopularPlan',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPopularPlan();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch popular plan');
    }
  }
);

// Slice
const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    items: [],
    popularPlan: null,
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
      // Fetch all plans
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch popular plan
      .addCase(fetchPopularPlan.fulfilled, (state, action) => {
        state.popularPlan = action.payload;
      });
  },
});

export const { clearError } = plansSlice.actions;
export default plansSlice.reducer;
