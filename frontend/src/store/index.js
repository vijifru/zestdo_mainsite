// Redux Store Configuration
import { configureStore } from '@reduxjs/toolkit';
import activitiesReducer from './slices/activitiesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import userRolesReducer from './slices/userRolesSlice';
import plansReducer from './slices/plansSlice';
import communitiesReducer from './slices/communitiesSlice';
import statsReducer from './slices/statsSlice';
import whyZestDoReducer from './slices/whyZestDoSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    testimonials: testimonialsReducer,
    userRoles: userRolesReducer,
    plans: plansReducer,
    communities: communitiesReducer,
    stats: statsReducer,
    whyZestDo: whyZestDoReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
