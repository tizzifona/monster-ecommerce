import React, { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Switch, Heading, useToast, Image, Text } from '@chakra-ui/react';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';

function ProductCreatorForm() {
  const { createMonster } = useContext(MonsterContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImage] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageUrlError, setImageError] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !imageUrl) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(price) || price <= 0) {
      toast({
        title: "Error",
        description: "Price must be a positive number.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const newMonster = { name, description, price, imageUrl, featured };
    createMonster(newMonster);

    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setFeatured(false);
    setImageError(false);

    toast({
      title: "Success",
      description: "Monster created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  return (
    <Box maxW="md" mx="auto" mt={20} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
      <Heading as="h2" size="xl" mb={5} textAlign="center" color="gray.800">
        Create New Monster
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel color="gray.800">Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter monster name"
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="description" mb={4} isRequired>
          <FormLabel color="gray.800">Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter monster description"
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="price" mb={4} isRequired>
          <FormLabel color="gray.800">Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter monster price"
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="imageUrl" mb={4} isRequired>
          <FormLabel color="gray.800">Image URL</FormLabel>
          <Input
            type="url"
            value={imageUrl}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter imageUrl URL"
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        {imageUrl && (
          <Box mb={4}>
            <Image
              src={imageUrl}
              alt="Monster Preview"
              borderRadius="lg"
              onError={handleImageError}
              onLoad={handleImageLoad}
              display={imageUrlError ? 'none' : 'block'}
            />
            {imageUrlError && <Text color="red.500">Invalid image URL</Text>}
          </Box>
        )}
        <FormControl display="flex" alignItems="center" mb={4}>
          <FormLabel htmlFor="featured" mb="0" color="gray.800">
            Featured
          </FormLabel>
          <Switch
            id="featured"
            isChecked={featured}
            onChange={() => setFeatured(!featured)}
            colorScheme="blue"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Create Monster
        </Button>
      </form>
    </Box>
  );
}

export default ProductCreatorForm;