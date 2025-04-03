import { configureStore } from '@reduxjs/toolkit';
import tabsReducer from './TabSlice';

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});
