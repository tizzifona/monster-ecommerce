import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';

function MonsterNotFound() {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header />
      <Box textAlign="center" py={10} px={6} flex="1">
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.500, blue.700)"
          backgroundClip="text"
        >
          Monster Not Found
        </Heading>
        <Text fontSize="xl" mt={3} mb={2}>
          The monster you are looking for does not exist.
        </Text>
        <Text color="black" mb={6}>
          It might have been removed or you may have mistyped the URL.
        </Text>
        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
          as={Link}
          to="/"
        >
          Go to Home
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}

export default MonsterNotFound;