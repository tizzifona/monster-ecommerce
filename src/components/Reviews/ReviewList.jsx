import {
  Text,
  HStack,
  Divider
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ReviewList({review}) {
  return (
    <>
    <HStack spacing={1}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          color={i < review.rating ? "teal.500" : "gray.300"} />
      ))}
      <Text fontWeight="bold" color="white">
        {review.username}
      </Text>
    </HStack>
    <Text color="white">{review.body}</Text>
    <Divider mt={2} mb={2} />
    </>
  )
}

export default ReviewList