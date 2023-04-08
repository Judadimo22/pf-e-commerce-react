import { Box, Button } from "@chakra-ui/react";

function SizeSelector(props) {
  const { sizes, selectedSize, onSizeSelect } = props;

  if (!sizes) {
    return null;
  }

  return (
    <Box>
      {Object.keys(sizes).map((sizeKey) => (
        <Button
          key={sizeKey}
          size="sm"
          variant="outline"
          borderRadius="25px"
          borderColor={selectedSize === sizeKey ? "blue.500" : "gray.300"}
          color={selectedSize === sizeKey ? "white" : "gray.500"}
          bg={selectedSize === sizeKey ? "blue.500" : "white"}
          _hover={{ bg: "blue.500", color: "white" }}
          marginRight="1rem"
          onClick={() => onSizeSelect(sizeKey)}
        >
          {sizes[sizeKey]}
        </Button>
      ))}
    </Box>
  );
}

export default SizeSelector;
