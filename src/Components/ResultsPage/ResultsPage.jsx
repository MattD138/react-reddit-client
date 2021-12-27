import { Box, VStack, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPosts,
  selectActiveFeed,
  selectIsLoading,
  getPostsForFeed,
} from '../../features/feed/feedSlice';
import { PostCard } from '../PostCard/PostCard';

export const ResultsPage = props => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const activeFeed = useSelector(selectActiveFeed);
  const loading = useSelector(selectIsLoading);

  // Load posts on app start and when activeFeed changes
  useEffect(() => {
    dispatch(getPostsForFeed(activeFeed));
  }, [dispatch, activeFeed]);

  return loading ? (
    <Box textAlign="center">
      <Spinner />
    </Box>
  ) : (
    <VStack h="full" spacing="1.5rem" rounded="base">
      {posts.map(post => {
        return <PostCard data={post} key={post.id} />;
      })}
    </VStack>
  );
};
