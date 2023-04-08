import { Box } from '@chakra-ui/react';

function SizeSelector({ sizes, selectedSize, onSizeSelect }) {
  return (
    <Box mb={4}>
      <Box as="label" fontWeight="bold" htmlFor="size-select">
        Tamaño
      </Box>
      <Box mt={2}>
        {sizes.map((size) => (
          <Box
            key={size}
            as="button"
            aria-label={`Seleccionar ${size}`}
            border="2px solid"
            borderColor={selectedSize === size ? 'gray.500' : 'gray.200'}
            borderRadius="full"
            boxSize="40px"
            margin="0 4px"
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SizeSelector;
