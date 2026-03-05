// Stats Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStats } from '../../services/api';

// Async Thunks
export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getStats();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch stats');
    }
  }
);

// Slice
const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    data: {
      apartments: 0,
      trainers: 0,
      happyKids: 0,
      activityCategories: 0,
    },
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
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = statsSlice.actions;
export default statsSlice.reducer;
