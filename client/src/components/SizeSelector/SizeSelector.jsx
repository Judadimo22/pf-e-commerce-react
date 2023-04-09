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
          size="md"
          variant="outline"
          borderRadius="10px"
          borderColor={selectedSize === sizeKey ? "#DAEB0F" : "#D9D9D9"}
          color={selectedSize === sizeKey ? "#272727" : "#565656"}
          bg={selectedSize === sizeKey ? "#DAEB0F" : "null"}
          _hover={{ bg: "#DAEB0F", color: "white" }}
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
