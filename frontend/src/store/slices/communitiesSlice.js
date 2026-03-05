// Communities Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCommunities } from '../../services/api';

// Async Thunks
export const fetchCommunities = createAsyncThunk(
  'communities/fetchCommunities',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCommunities();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch communities');
    }
  }
);

// Slice
const communitiesSlice = createSlice({
  name: 'communities',
  initialState: {
    items: [],
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
      .addCase(fetchCommunities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommunities.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCommunities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = communitiesSlice.actions;
export default communitiesSlice.reducer;
