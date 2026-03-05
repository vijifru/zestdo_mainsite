// Activities Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getActivities, getActivityById } from '../../services/api';

// Async Thunks
export const fetchActivities = createAsyncThunk(
  'activities/fetchActivities',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getActivities();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch activities');
    }
  }
);

export const fetchActivityById = createAsyncThunk(
  'activities/fetchActivityById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getActivityById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch activity');
    }
  }
);

// Slice
const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    items: [],
    selectedActivity: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSelectedActivity: (state) => {
      state.selectedActivity = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all activities
      .addCase(fetchActivities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch activity by ID
      .addCase(fetchActivityById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivityById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedActivity = action.payload;
      })
      .addCase(fetchActivityById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedActivity, clearError } = activitiesSlice.actions;
export default activitiesSlice.reducer;
