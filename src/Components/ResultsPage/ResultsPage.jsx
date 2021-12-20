import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import { PostCard } from '../PostCard/PostCard';

// Replace with real data from reddit api
const posts = [
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
      '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2…3c4d5f3de4f5b9120b660ad850dc9&type=text%2Fhtml&schema=gfycat" width="600" height="338" scrolling="no" title="Gfycat embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>',
    url: 'https://gfycat.com/niftyimprobabledikkops-hippopotamus',
    isSpoiler: false,
    isLocked: false,
  },
];

export const ResultsPage = props => {
  return (
    <VStack h="full" spacing="1.5rem" rounded="base">
      {posts.map(post => {
        return <PostCard data={post} />;
      })}
    </VStack>
  );
};
