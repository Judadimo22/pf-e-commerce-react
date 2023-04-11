import { Box } from '@chakra-ui/react';

function ColorSelector({ colors, selectedColor, onColorSelect }) {
  return (
      <Box mt={2}>
        {colors.map((color) => (
          <Box
            key={color}
            as="button"
            aria-label={`Select ${color} color`}
            border="2px solid"
            borderColor={selectedColor === color ? 'gray.500' : 'gray.200'}
            bg={color}
            borderRadius="50%"
            boxSize="40px"
            margin="0 4px"
            onClick={() => onColorSelect(color)}
          />
        ))}
      </Box>
  );
}

export default ColorSelector;
