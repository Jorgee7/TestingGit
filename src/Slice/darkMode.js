import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'theme',
  initialState: true ,
  reducers: {
    switchTheme: (state) => !state,
  },
})

// Action creators are generated for each case reducer function
export const { switchTheme } = darkModeSlice.actions

export default darkModeSlice.reducer