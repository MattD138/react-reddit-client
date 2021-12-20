import { Flex, IconButton, Text } from '@chakra-ui/react';
import * as React from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
//import { GiBalaclava, GiRibcage } from 'react-icons/gi';

export const PostScore = props => {
  const { score } = props;
  return (
    <Flex direction="column" align="center" justify="start">
      <IconButton
        variant="ghost"
        aria-label="Upvote post"
        fontSize="1.25rem"
        my="4px"
        icon={<BiUpvote />}
        href="#"
      />
      <Text fontSize="md" fontWeight="semibold" my="2px">
        {score}
      </Text>
      <IconButton
        variant="ghost"
        aria-label="Downvote post"
        fontSize="1.2rem"
        my="2px"
        icon={<BiDownvote />}
      />
    </Flex>
  );
};
