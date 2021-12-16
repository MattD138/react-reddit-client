import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { MobileTopBar } from './Components/Nav/MobileTopBar';
import { Sidebar } from './Components/Nav/Sidebar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh" flexDirection="column">
        <MobileTopBar />
        <Flex flex="1" overflow="hidden">
          <Sidebar
            display={{
              base: 'none',
              md: 'flex',
            }}
          />
          <Flex
            display={{
              base: 'none',
              lg: 'block',
            }}
            width="96"
            direction="column"
            overflowY="auto"
            borderRightWidth="1px"
            p="6"
          >
            <Box
              borderWidth="2px"
              rounded="base"
              borderStyle="dashed"
              h="full"
            />
          </Flex>
          <Flex flex="1" p="6">
            <Box
              borderWidth="2px"
              rounded="base"
              borderStyle="dashed"
              h="full"
              w="full"
            />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
