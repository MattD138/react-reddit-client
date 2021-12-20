import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import { MobileTopBar } from './Components/Nav/MobileTopBar';
import { Sidebar } from './Components/Nav/Sidebar';
import { ResultsPage } from './Components/ResultsPage/ResultsPage';

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
          <Flex flex="1" p="6" justify="center" overflowY="scroll">
            <Box minH="full" w="min(800px, 100%)">
              <ResultsPage />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
