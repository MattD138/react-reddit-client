import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import * as React from 'react'

export const SearchField = (props) => {
  return (
    <InputGroup size="sm" {...props}>
      <InputLeftElement pointerEvents="none">
        <BsSearch opacity={0.5} />
      </InputLeftElement>
      <Input
        rounded="md"
        placeholder="Search"
        bg={mode('white', 'gray.900')}
        _placeholder={{
          opacity: 1,
          color: mode('gray.400', 'gray.500'),
        }}
        tabIndex="-1"
      />
    </InputGroup>
  )
}
