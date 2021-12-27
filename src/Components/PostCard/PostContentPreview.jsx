import { Box, Text, Image } from '@chakra-ui/react';
import * as React from 'react';

export const PostContentPreview = props => {
  const { type, selftext, url, videoUrl, mediaEmbed } = props.data;

  let contentPreview = null;
  if (type === 'self') {
    contentPreview = (
      <Text whiteSpace="pre-line" noOfLines={4}>
        {selftext}
      </Text>
    );
  } else if (type === 'image') {
    contentPreview = <Image src={url} rounded="lg" maxH={500} m="0 auto" />;
  } else if (type === 'video') {
    contentPreview = (
      <Box textAlign="center" w="full">
        <video controls style={{ display: 'inline-block' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </Box>
    );
  } else if (type === 'embed') {
    contentPreview = (
      <Box dangerouslySetInnerHTML={{ __html: mediaEmbed }}></Box>
    );
  }

  return (
    <Box mt={2} mb={3}>
      {contentPreview}
    </Box>
  );
};
