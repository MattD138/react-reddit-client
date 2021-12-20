import {
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  Spacer,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { PostScore } from './PostScore';
import { PostCredit } from './PostCredit';

export const PostCard = props => {
  const {
    type,
    permalink,
    title,
    author,
    selftext,
    subreddit_name,
    created,
    score,
    scoreStr,
    upvoteRatio,
    numComments,
    media,
    url,
    isSpoiler,
    isLocked,
  } = props.data;
  console.log(
    type,
    permalink,
    title,
    author,
    selftext,
    subreddit_name,
    created,
    score,
    scoreStr,
    upvoteRatio,
    numComments,
    media,
    url,
    isSpoiler,
    isLocked
  );

  let content = null;
  if (selftext !== '') {
    content = (
      <Box my="3">
        {selftext.split('\n\n').map(line => (
          <Text>{line}</Text>
        ))}
      </Box>
    );
  } else if (media !== null) {
    content = <Image src={media} rounded="lg" my="3" />;
  }

  return (
    <LinkBox
      w="full"
      px="1"
      py="2.5"
      bg={mode('gray.50', 'gray.700')}
      shadow="base"
      rounded="md"
      transition="all 0.2s"
      _hover={{
        shadow: 'lg',
      }}
    >
      <Flex direction="row">
        <PostScore score={scoreStr} />
        <Flex direction="column" mx={{ base: '2', md: '4' }} w="full">
          <PostCredit author={author} created={created} />
          <Heading as="h3" size="md" mt="1" mb="2">
            {title}
          </Heading>
          {/*Non-reddit images by img tag, media by iframe tag*/}
          {/*https://stackoverflow.com/questions/1248849/converting-sanitised-html-back-to-displayable-html*/}
          {content}
          <Spacer />
          <Flex
            wrap="wrap"
            justifyContent="space-between"
            fontSize="sm"
            textColor="gray.500"
          >
            <Box fontWeight="semibold">
              <Box as={FaRegCommentAlt} display="inline-block" me="2" />
              {numComments} comments
            </Box>
            <Box as="span">{Math.round(upvoteRatio * 100)}% upvoted</Box>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};
