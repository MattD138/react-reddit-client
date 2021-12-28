import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Spinner,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFeed } from '../../features/feed/feedSlice';
import {
  selectAllSubreddits,
  selectSubredditsLoading,
} from '../../features/subreddits/subredditsSlice';
import { getSubreddits } from '../../features/subreddits/subredditsSlice';
import { SearchField } from './SearchField';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { SubredditItem } from './SubredditItem';
import { Logo } from './Logo';

const popularSubreddit = {
  name: 'Popular',
  icon: 'https://cdn.vox-cdn.com/thumbor/0_re6O_qVgBEGSBKcxwyyZqqSos=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13265553/cool_goat_2.jpg',
  url: '/r/popular',
};

export const Sidebar = props => {
  const dispatch = useDispatch();
  const activeFeed = useSelector(selectActiveFeed);
  const subreddits = useSelector(selectAllSubreddits);
  const isLoading = useSelector(selectSubredditsLoading);

  // Fetch subreddits from reddit json api
  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <Flex
      bg={mode('gray.50', 'gray.800')}
      direction="column"
      borderRightWidth="1px"
      width="64"
      {...props}
    >
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Logo h="12" w="50px" />

        <Box mb="6">
          <SearchField />
        </Box>

        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <SubredditItem
              name={popularSubreddit.name}
              icon={popularSubreddit.icon}
              url={popularSubreddit.url}
              isActive={activeFeed === popularSubreddit.name}
            />
          </Stack>

          <Divider />

          <Heading as="span" size="sm" textTransform="uppercase">
            Subribbits
          </Heading>
          {isLoading ? (
            <Box textAlign="center">
              <Spinner />
            </Box>
          ) : (
            <Stack spacing="1">
              {subreddits.map(sub => (
                <SubredditItem
                  name={sub.name}
                  icon={sub.icon}
                  url={sub.url}
                  key={sub.name}
                  isActive={activeFeed === sub.name}
                />
              ))}
            </Stack>
          )}
        </Stack>
        <Spacer />
      </Flex>

      <ColorModeSwitcher />
    </Flex>
  );
};
