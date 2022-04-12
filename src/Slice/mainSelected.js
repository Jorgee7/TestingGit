import { createSlice } from '@reduxjs/toolkit';

export const mainSelectedSlice = createSlice({
  name: 'main',
  initialState: 'News' ,
  reducers: {
    switchMain: (state, action) => action.payload,
  },
})

// Action creators are generated for each case reducer function
export const { switchMain } = mainSelectedSlice.actions

export default mainSelectedSlice.reducer