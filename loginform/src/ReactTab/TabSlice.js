import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: [],
  reducers: {
    addTab: (state, action) => {
      state.push(action.payload);
    },
    removeTab: (state, action) => {
      return state.filter(tab => tab.id !== action.payload);
    },
  },
});

export const { addTab, removeTab } = tabsSlice.actions;
export default tabsSlice.reducer;
