import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const samplePosts = [
  {
    type: 'self',
    permalink:
      '/r/AskReddit/comments/rik4cn/what_is_something_that_was_used_heavily_in_the/',
    title:
      "What is something that was used heavily in the year 2000, but it's almost never used today?",
    author: 'BtownBrelooms',
    selftext: '',
    subreddit_name: 'r/AskReddit',
    created: 1639755668,
    score: 50103,
    scoreStr: '50.1k',
    upvoteRatio: 0.89,
    numComments: 33420,
    media: null,
    url: null,
    isSpoiler: false,
    isLocked: false,
  },
  {
    type: 'image',
    permalink:
      '/r/NatureIsFuckingLit/comments/rin8hx/one_of_my_fav_spots_in_alaska_summer_winter/',
    title: '🔥 One of my fav spots in Alaska- summer ➡️ winter',
    author: 'willivlliw',
    selftext: `I just want you for my own\n\n
    More than you could ever know\n\n
    Make my wish come true\n\n
    All I want for Christmas is you`,
    subreddit_name: 'r/NatureIsFuckingLit',
    created: 1639764517,
    score: 5230,
    scoreStr: '5230',
    upvoteRatio: 0.99,
    numComments: 85,
    media: null,
    url: 'https://www.reddit.com/gallery/rin8hx',
    isSpoiler: false,
    isLocked: false,
  },
  {
    type: 'media',
    permalink: '/r/Eyebleach/comments/rif5wa/hippo_attack/',
    title: 'Hippo Attack',
    author: 'ToughAcanthisitta451',
    selftext: '',
    subreddit_name: 'r/Eyebleach',
    created: 1639739432,
    score: 31615,
    scoreStr: '31.6k',
    upvoteRatio: 0.94,
    numComments: 462,
    media:
      'https://thumbs.gfycat.com/NiftyImprobableDikkops-size_restricted.gif',
    url: 'https://gfycat.com/niftyimprobabledikkops-hippopotamus',
    isSpoiler: false,
    isLocked: false,
  },
];

const initialState = {
  activeFeed: 'Popular',
  posts: samplePosts,
  currentPost: null,
  isLoading: false,
  error: null,
};

export const getPostsForFeed = createAsyncThunk(
  'feed/getPostsForFeed',
  async feedName => {
    const route = `https://www.reddit.com/r/${feedName}.json`;
    const response = await fetch(route);
    const json = await response.json();
    return json;
  }
);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.activeFeed = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
  extraReducers: {
    [getPostsForFeed.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [getPostsForFeed.fulfilled]: (state, action) => {
      console.log('getPostsForFeed payload', action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [getPostsForFeed.rejected]: (state, action) => {
      console.log('getPostsForFeed error', action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFeed, setPosts, setCurrentPost } = feedSlice.actions;

export const selectActiveFeed = state => state.feed.activeFeed;
export const selectPosts = state => state.feed.posts;
export const selectCurrentPost = state => state.feed.currentPost;
export const selectIsLoading = state => state.feed.isLoading;
export const selectError = state => state.feed.error;

export default feedSlice.reducer;
