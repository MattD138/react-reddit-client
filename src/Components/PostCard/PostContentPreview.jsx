import { Box, Text, Image } from '@chakra-ui/react';
import * as React from 'react';

export const PostContentPreview = props => {
  const { type, selftext, media } = props.data;

  let contentPreview = null;
  if (type === 'self') {
    contentPreview = (
      <Text whiteSpace="pre-line" noOfLines={4}>
        {selftext}
      </Text>
    );
  } else if (type === 'image') {
    contentPreview = <Image src={media} rounded="lg" maxH={500} m="0 auto" />;
  } else if (type === 'media') {
    contentPreview = <Box dangerouslySetInnerHTML={{ __html: media }}></Box>;
  }

  return (
    <Box mt={2} mb={3}>
      {contentPreview}
    </Box>
  );
};
