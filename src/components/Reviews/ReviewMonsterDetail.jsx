import { Box, Heading } from "@chakra-ui/react";
import ReviewList from "./ReviewList";

function ReviewMonsterDetail({reviews}) {

  return (
    <Box
        mt={5}
        p={5}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        borderRadius="lg"
    >
        <Heading as="h3" size="lg" color="white" mb={4}>
          Reviews
        </Heading>
        {reviews.map((review) =>(
            <Box key={review.id}>
                <ReviewList review={review}/>
            </Box>
        ))}
        
    </Box>
  )
}

export default ReviewMonsterDetail