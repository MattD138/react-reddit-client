import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import * as React from 'react'

// https://www.flaticon.com/free-icon/frog_1838694?term=frog&related_id=1838694
const logo = {
  flat: 'https://cdn-icons-png.flaticon.com/512/1838/1838662.png',
  outlineColour: 'https://cdn-icons-png.flaticon.com/512/1838/1838764.png',
  outline: 'https://cdn-icons-png.flaticon.com/512/1838/1838694.png'
}

export const Logo = (props) => {
  const {h, w} = props;
  return (
    <Flex h={h} align='center' justify='center' m='4'>
      <Image
        maxWidth={w}
        src={logo.outlineColour}
      />
      <Box m='2'>
        <Heading as='span' size='lg'>Ribbit</Heading>
      </Box>
    </Flex>
  )
}
