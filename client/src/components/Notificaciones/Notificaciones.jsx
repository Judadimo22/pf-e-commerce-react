import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

const Notification = ({ title, text, images, onClickImage }) => {
  return (
    <Stack direction="column" spacing={10} alignItems="center">
      <Box>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text>{text}</Text>
      </Box>
      <Flex justifyContent="center" flexWrap="wrap">
        {images.map((image, index) => (
          <Box key={index} p="6" maxW="sm" w={330} borderWidth="1px" borderRadius="lg">
            <Image src={image} alt="Oferta"  onClick={onClickImage}/>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default Notification;