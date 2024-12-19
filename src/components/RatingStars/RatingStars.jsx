import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Icon as={FaStar} color="yellow.400" key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<Icon as={FaStarHalfAlt} color="yellow.400" key={i} />);
    } else {
      stars.push(<Icon as={FaRegStar} color="yellow.400" key={i} />);
    }
  }
  return <>{stars}</>;
}

export default RatingStars;
