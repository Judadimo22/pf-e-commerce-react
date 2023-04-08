import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const StarRating = ({ rating }) => {
  const fullStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <Icon key={index} as={BsStarFill} color="yellow.400" mr={1} />
  ));

  const hasHalfStar = rating % 1 !== 0;
  const maxStars = 5;
  const remainingStars = hasHalfStar
    ? maxStars - Math.ceil(rating)
    : maxStars - Math.floor(rating);

  const halfStar = hasHalfStar && (
    <Icon as={BsStarHalf} key="half-star" color="yellow.400" />
  );

  const emptyStars = Array.from({ length: remainingStars }, (_, index) => (
    <Icon key={index} as={BsStar} color="yellow.400" />
  ));

  return (
    <Flex align="center">
      {fullStars}
      {halfStar}
      {emptyStars}
      <Text ml="2" fontSize="md" fontWeight="500">
        {rating}/5
      </Text>
    </Flex>
  );
};

export default StarRating;
