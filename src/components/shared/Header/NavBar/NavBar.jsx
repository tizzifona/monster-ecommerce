import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Heading, Link, IconButton, Menu, MenuButton, MenuList, MenuItem, Avatar, Divider, Spacer } from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';

function NavBar() {
  return (
    <Flex as="nav"  p={4} color="white" align="center">
      <Heading as="h1" size="lg" color="white">
        <Spacer left={"-10px"}>
          Monstry
        </Spacer>
      </Heading>
      <Flex align="center" ml="auto">
        <Link as={RouterLink} to="/" mx={2} color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/shop" mx={2} color="white">
          Shop
        </Link>
        <Link as={RouterLink} to="/about" mx={2} color="white">
          About
        </Link>
        <Link as={RouterLink} to="/contact" mx={2} color="white">
          Contact
        </Link>
        <IconButton
          as={RouterLink}
          to="/cart"
          aria-label="Cart"
          icon={<FiShoppingBag />}
          colorScheme="whiteAlpha"
          variant="ghost"
          ml={4}
        />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <Avatar
                size="sm"
                name="User Name"
                src="https://bit.ly/broken-link"
              />
            }
            colorScheme="whiteAlpha"
            variant="ghost"
            ml={4}
          />
          <MenuList
            bg="rgba(0, 0, 0, 0.8)"
            backdropFilter="blur(50px)"
            borderColor="rgba(255, 255, 255, 0.10)"
            color="white"
          >
            <MenuItem
              as={RouterLink}
              to="/profile"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Profile
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/orders"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Orders
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/settings"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Settings
            </MenuItem>
            <Divider />
            <MenuItem
              as={RouterLink}
              to="/admin/product-manager"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Product Manager
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/logout"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default NavBar;