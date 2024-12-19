import {
    Button
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function Cart() {
  return (
    <Button
        size="md"
        colorScheme="teal"
        leftIcon={<AddIcon />}
        bg="brand.100"
        _hover={{ bg: "brand.200" }}
        _active={{ bg: "brand.300", transform: "scale(0.95)" }}
        borderRadius="full"
        boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
        mt={2}
    >
        Add to Cart
    </Button>
  )
}

export default Cart