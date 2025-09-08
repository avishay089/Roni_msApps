import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './PhotosSlice';

// Create Redux store with photos reducer
export const Store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export default Store;