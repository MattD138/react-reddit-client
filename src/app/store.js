import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice';
import subredditReducer from '../features/subreddits/subredditsSlice';

export default configureStore({
  reducer: {
    feed: feedReducer,
    subreddits: subredditReducer,
  },
});
