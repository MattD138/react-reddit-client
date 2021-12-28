import * as React from 'react';
import {
  Avatar,
  HStack,
  Link,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFeed } from '../../features/feed/feedSlice';

export const SubredditItem = props => {
  const dispatch = useDispatch();
  const { name, icon, url, isActive } = props;

  return (
    <Link
      onClick={() => {
        dispatch(setFeed(name));
      }}
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="md"
      userSelect="none"
      aria-current={isActive ? 'page' : undefined}
      color={mode('gray.700', 'gray.400')}
      _hover={{
        bg: mode('gray.100', 'gray.700'),
        color: mode('gray.900', 'white'),
      }}
      _activeLink={{
        bg: mode('gray.200', 'gray.700'),
        color: 'inherit',
      }}
    >
      <HStack spacing="4">
        <Avatar size="sm" src={icon} name={url} />
        <Text as="span">{name}</Text>
      </HStack>
    </Link>
  );
};
