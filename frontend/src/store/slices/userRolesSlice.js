// User Roles Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRoles } from '../../services/api';

// Async Thunks
export const fetchUserRoles = createAsyncThunk(
  'userRoles/fetchUserRoles',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUserRoles();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch user roles');
    }
  }
);

// Slice
const userRolesSlice = createSlice({
  name: 'userRoles',
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
      .addCase(fetchUserRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = userRolesSlice.actions;
export default userRolesSlice.reducer;
