import { Box, Flex, Link, Text, Stack } from '@chakra-ui/react';

function Footer() {
    return (
        <Box 
            bg="gray.800" 
            color="white" 
            py={10} 
            position="relative" 
            mt="auto"
        >
            <Flex
                maxW="1200px"
                mx="auto"
                px={4}
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
            >
                <Text fontSize="lg" fontWeight="bold">
                    Monsters Shop
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={{ base: 4, md: 0 }}>
                    <Link href="#" _hover={{ textDecoration: 'none', color: 'gray.400' }}>
                        Home
                    </Link>
                    <Link href="#" _hover={{ textDecoration: 'none', color: 'gray.400' }}>
                        About
                    </Link>
                    <Link href="#" _hover={{ textDecoration: 'none', color: 'gray.400' }}>
                        Contact
                    </Link>
                    <Link href="#" _hover={{ textDecoration: 'none', color: 'gray.400' }}>
                        Privacy Policy
                    </Link>
                </Stack>
            </Flex>
            <Text textAlign="center" mt={4} fontSize="sm">
                &copy; {new Date().getFullYear()} Monsters Shop. All rights reserved.
            </Text>
        </Box>
    );
}

export default Footer;
