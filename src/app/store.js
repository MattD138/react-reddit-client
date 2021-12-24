import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice';

export default configureStore({
  reducer: {
    feed: feedReducer,
  },
});
