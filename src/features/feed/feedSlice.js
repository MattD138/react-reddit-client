import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { htmlDecode } from './helpers';

const samplePosts = [
  {
    type: 'self',
    id: 'a1',
    permalink:
      '/r/AskReddit/comments/rik4cn/what_is_something_that_was_used_heavily_in_the/',
    title:
      "What is something that was used heavily in the year 2000, but it's almost never used today?",
    author: 'BtownBrelooms',
    selftext: `I just want you for my own
    More than you could ever know
    Make my wish come true
    All I want for Christmas is you`,
    subredditName: 'r/AskReddit',
    created: 1639755668,
    score: 50103,
    scoreStr: '50.1k',
    upvoteRatio: 0.89,
    numComments: 33420,
    mediaEmbed: null,
    url: null,
    isSpoiler: false,
    isLocked: false,
  },
  {
    type: 'image',
    id: 'b2',
    permalink: '/r/pics/comments/rouy9r/just_a_hotel_in_china/',
    title: 'Just a hotel in China',
    author: 'warzoku',
    selftext: '',
    subredditName: 'r/pics',
    created: 1640516978,
    score: 6072,
    scoreStr: '6072',
    upvoteRatio: 0.95,
    numComments: 266,
    mediaEmbed: 'https://i.redd.it/jn4gt7hodv781.jpg',
    url: 'https://i.redd.it/jn4gt7hodv781.jpg',
    isSpoiler: false,
    isLocked: false,
  },
  {
    type: 'media',
    id: 'c3',
    permalink: '/r/Eyebleach/comments/rif5wa/hippo_attack/',
    title: 'Hippo Attack',
    author: 'ToughAcanthisitta451',
    selftext: '',
    subredditName: 'r/Eyebleach',
    created: 1639739432,
    score: 31615,
    scoreStr: '31.6k',
    upvoteRatio: 0.94,
    numComments: 462,
    mediaEmbed:
      '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fniftyimprobabledikkops&display_name=Gfycat&url=https%3A%2F%2Fgfycat.com%2Fniftyimprobabledikkops-hippopotamus&image=https%3A%2F%2Fthumbs.gfycat.com%2FNiftyImprobableDikkops-size_restricted.gif&key=2aa3c4d5f3de4f5b9120b660ad850dc9&type=text%2Fhtml&schema=gfycat" width="600" height="338" scrolling="no" title="Gfycat embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>',
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
      console.log('getPostsForFeed loading');
      state.isLoading = true;
      state.isError = null;
    },
    [getPostsForFeed.fulfilled]: (state, action) => {
      console.log('getPostsForFeed payload', action.payload);
      const newPosts = action.payload['data']['children'].map(postObj => {
        const data = postObj['data'];
        const post = {
          id: data['id'],
          permalink: data['permalink'],
          title: data['title'],
          author: data['author'],
          selftext: data['selftext'],
          selftextHtml: data['selftext_html'],
          subredditName: data['subreddit_name_prefixed'],
          created: data['created'] * 1000,
          score: data['score'],
          upvoteRatio: data['upvote_ratio'],
          numComments: data['num_comments'],
          url: data['url_overridden_by_dest'],
          videoUrl: null,
          mediaEmbed: null,
          isSpoiler: data['spoiler'],
          isLocked: data['locked'],
        };
        // type and mediaEmbed
        if (data['is_self']) {
          post['type'] = 'self';
        } else if (['i.redd.it', 'i.imgur.com'].includes(data['domain'])) {
          if (data['preview'].hasOwnProperty('reddit_video_preview')) {
            post['type'] = 'video';
            post['videoUrl'] =
              data['preview']['reddit_video_preview']['fallback_url'];
          } else {
            post['type'] = 'image';
          }
        } else if (data['is_video']) {
          post['type'] = 'video';
          post['videoUrl'] =
            data['secure_media']['reddit_video']['fallback_url'];
        } else if (data['secure_media_embed'].hasOwnProperty('content')) {
          post['type'] = 'embed';
          post['mediaEmbed'] = htmlDecode(
            data['secure_media_embed']['content']
          );
        }
        // scoreStr
        if (post['score'] < 1000) {
          post['scoreStr'] = post['score'].toString();
        } else {
          post['scoreStr'] = (post['score'] / 1000).toFixed(1) + 'k';
        }
        // filter out or mark stickied?
        return post;
      });
      state.posts = newPosts;
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
