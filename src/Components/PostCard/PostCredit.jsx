import { Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-AU');

export const PostCredit = props => {
  const { author, created } = props;
  const timeSinceCreated = timeAgo.format(created);

  return (
    <Flex wrap="wrap">
      <Text as="span" fontSize="xs" me="1" color="gray.500">
        Posted by {author}
      </Text>
      <Text as="span" fontSize="xs" color="gray.500">
        {timeSinceCreated}
      </Text>
    </Flex>
  );
};
