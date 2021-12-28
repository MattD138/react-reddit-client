import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  all: [],
  isLoading: false,
  error: null,
};

export const getSubreddits = createAsyncThunk(
  'subreddits/getSubreddits',
  async () => {
    const route = 'https://www.reddit.com/subreddits.json';
    const response = await fetch(route);
    const json = await response.json();
    return json;
  }
);

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    setSubreddits: (state, action) => {
      state.all = action.payload;
    },
  },
  extraReducers: {
    [getSubreddits.pending]: state => {
      console.log('getSubreddits loading');
      state.isLoading = true;
      state.error = null;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      console.log('getSubreddits payload', action.payload);
      const subList = action.payload['data']['children'].map(subObj => {
        const data = subObj['data'];
        return {
          name: data['display_name'],
          url: data['url'],
          icon: data['icon_img'],
        };
      });
      state.all = subList;
      state.isLoading = false;
      state.error = null;
    },
    [getSubreddits.rejected]: (state, action) => {
      console.log('getSubreddits error', action.payload);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setSubreddits } = subredditsSlice.actions;

export const selectAllSubreddits = state => state.subreddits.all;
export const selectSubredditsLoading = state => state.subreddits.isLoading;
export const selectSubredditsError = state => state.subreddits.error;

export default subredditsSlice.reducer;
