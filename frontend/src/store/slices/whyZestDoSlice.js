// Why ZestDo Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWhyZestDo } from '../../services/api';

// Async Thunks
export const fetchWhyZestDo = createAsyncThunk(
  'whyZestDo/fetchWhyZestDo',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getWhyZestDo();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch data');
    }
  }
);

// Slice
const whyZestDoSlice = createSlice({
  name: 'whyZestDo',
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
      .addCase(fetchWhyZestDo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWhyZestDo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWhyZestDo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = whyZestDoSlice.actions;
export default whyZestDoSlice.reducer;
