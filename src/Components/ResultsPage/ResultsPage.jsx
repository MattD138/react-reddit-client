import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../features/feed/feedSlice';
import { PostCard } from '../PostCard/PostCard';

export const ResultsPage = props => {
  const posts = useSelector(selectPosts);
  return (
    <VStack h="full" spacing="1.5rem" rounded="base">
      {posts.map(post => {
        return <PostCard data={post} key={post.id} />;
      })}
    </VStack>
  );
};
