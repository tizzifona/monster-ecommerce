import {
    HStack,
    IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function ButtonSocialMedia() {
  return (
    <HStack spacing={4} mt={4}>
    <IconButton
      aria-label="Share on Facebook"
      icon={<FaFacebook />}
      colorScheme="blue"
      _hover={{ bg: "blue.200" }}
      _active={{ bg: "brand.300", transform: "scale(0.95)" }}
    />
    <IconButton
      aria-label="Share on Twitter"
      icon={<FaTwitter />}
      colorScheme="cyan"
      _hover={{ bg: "cyan.200" }}
      _active={{ bg: "brand.300", transform: "scale(0.95)" }}
    />
    <IconButton
      aria-label="Share on Instagram"
      icon={<FaInstagram />}
      colorScheme="pink"
      _hover={{ bg: "pink.200" }}
      _active={{ bg: "brand.300", transform: "scale(0.95)" }}
    />
  </HStack>
  )
}

export default ButtonSocialMedia