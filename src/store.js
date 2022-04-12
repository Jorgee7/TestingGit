import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './Slice/darkMode';
import mainSelectedReducer from './Slice/mainSelected';

export default configureStore({
  reducer: {
      darkMode:darkModeReducer,
      main:mainSelectedReducer,
  },
})