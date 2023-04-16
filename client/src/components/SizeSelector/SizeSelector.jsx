import { Box, Button } from "@chakra-ui/react";

function SizeSelector(props) {
  const { size, selectedSize, onSizeSelect, stock } = props;

  if (!size) {
    return null;
  }

  return (
    <Box>
     
        <Button
          key={size}
          size="md"
          variant="outline"
          borderRadius="10px"
          borderColor={selectedSize === size ? "#DAEB0F" : "#D9D9D9"}
          color={selectedSize === size ? "#272727" : "#565656"}
          bg={selectedSize === size ? "#DAEB0F" : "null"}
          _hover={{ bg: "#DAEB0F", color: "white" }}
          marginRight="1rem"
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </Button>
      
    </Box>
  );
}

export default SizeSelector;
