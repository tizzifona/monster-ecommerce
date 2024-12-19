import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <InputGroup mb={4}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.600" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search monsters"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        _placeholder={{ color: 'gray.600' }}
        bg="gray.100"
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.400' }}
        _focus={{ borderColor: 'blue.500' }}
        color="black"
      />
    </InputGroup>
  );
}

export default SearchBar;