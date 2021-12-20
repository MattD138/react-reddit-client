import {
  Box,
  Divider,
  Flex,
  Heading,
  Spacer,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { SearchField } from './SearchField';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { SubredditItem } from './SubredditItem';
import { Logo } from './Logo';

// Replace with real data from reddit api
// reddit.com/subreddits.json
const subreddits = [
  {
    name: 'AskReddit',
    icon: 'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png',
    url: '/r/AskReddit/',
  },
  {
    name: 'formula1',
    icon: 'https://b.thumbs.redditmedia.com/0NRxOirM7gxfFYVJ2tVGKyzvcL1t6yit3K1aAa-EDfI.png',
    url: '/r/formula1/',
  },
  {
    name: 'news',
    icon: 'https://a.thumbs.redditmedia.com/E0Bkwgwe5TkVLflBA7WMe9fMSC7DV2UOeff-UpNJeb0.png',
    url: '/r/news/',
  },
];

const popularSubreddit = {
  name: 'Popular',
  icon: 'https://cdn.vox-cdn.com/thumbor/0_re6O_qVgBEGSBKcxwyyZqqSos=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13265553/cool_goat_2.jpg',
  url: '/r/popular',
};

export const Sidebar = props => {
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
              isActive
            />
          </Stack>

          <Divider />

          <Heading as="span" size="sm" textTransform="uppercase">
            Subribbits
          </Heading>
          <Stack spacing="1">
            {subreddits.map(sub => (
              <SubredditItem name={sub.name} icon={sub.icon} url={sub.url} />
            ))}
          </Stack>
        </Stack>
        <Spacer />
      </Flex>

      <ColorModeSwitcher />
    </Flex>
  );
};
