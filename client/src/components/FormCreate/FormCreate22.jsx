import { useState } from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Select, Checkbox, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, Flex, Spacer, VStack, Image } from '@chakra-ui/react';
import axios from 'axios';

function CrearProducto() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [type, setType] = useState('');
    const [tallas, setTalles] = useState([]);
    const [trademark, setTrademark] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Subir imagen a Cloudinary
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'i5hof6um');
        const response = await axios.post('https://api.cloudinary.com/v1_1/dlqnb6csq/image/upload', formData);
        const imageUrl = response.data.secure_url;

        // Guardar el resto de los datos en la base de datos en MongoDB
        const data = {
            name,
            description,
            categorie,
            type,
            tallas,
            trademark,
            image: imageUrl,
            price
        };
        console.log('data', data)
        const response2 = await fetch('https://backend-pf-uh1o.onrender.com/cloth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response2.json();
        console.log(result);
    };


    const handleTalleChange = (talla, stock) => {
        const talleIndex = tallas.findIndex((item) => item.talla === talla);
        if (talleIndex === -1) {
            setTalles([...tallas, { talla, stock: parseInt(stock) }]);
        } else {
            const newTalles = [...tallas];
            newTalles[talleIndex].stock = parseInt(stock);
            setTalles(newTalles);
        }
    };



    return (
        <Box p="4">
            <Heading as="h1" size="xl">Crear Producto</Heading>
            <Box mt="8">
                <form onSubmit={handleSubmit}>
                    <Button type='submit'>Create</Button>
                    <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl id="description" mt="4" isRequired>
                        <FormLabel>Description</FormLabel>
                        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>
                    <FormControl id="categorie" mt="4" isRequired>
                        <FormLabel>Categoría</FormLabel>
                        <Select placeholder="Seleccionar categoría" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="kid">Kid</option>
                        </Select>
                    </FormControl>
                    <FormControl id="tipo-prenda" mt="4" isRequired>
                        <FormLabel>Type</FormLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="" disabled={true}>Select an option</option>
                            <option value="pants">Pants</option>
                            <option value="shirts">Shirts</option>
                            <option value="hoodies">Hoodies</option>
                            <option value="hats">Hats</option>
                        </Select>
                    </FormControl>
                    <FormControl id="trademark" mt="4" isRequired>
                        <FormLabel>Marca</FormLabel>
                        <Input type="text" value={trademark} onChange={(e) => setTrademark(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        {/* <Button onClick={handleImageUpload}>Cargar imagen</Button> */}
                    </FormControl>
                    <FormControl id="price" mt="4">
                        <FormLabel>Price</FormLabel>
                        <NumberInput
                            defaultValue={isNaN(price) ? 0 : price}
                            min={0}
                            precision={2}
                            step={0.01}
                            onChange={(value) => {
                                const newValue = parseFloat(value);
                                if (!isNaN(newValue)) {
                                    setPrice(newValue);
                                }
                            }}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl id="tallas" mt="4">
                        <FormLabel>Talles</FormLabel>
                        <Flex>
                            <Box flex="1" mr="4">
                                <FormLabel htmlFor="talla-xs">XS</FormLabel>
                                <NumberInput id="talla-xs" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('XS', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1" mr="4">
                                <FormLabel htmlFor="talla-s">S</FormLabel>
                                <NumberInput id="talla-s" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('S', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1" mr="4">
                                <FormLabel htmlFor="talla-m">M</FormLabel>
                                <NumberInput id="talla-m" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('M', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1">
                                <FormLabel htmlFor="talla-l">L</FormLabel>
                                <NumberInput id="talla-l" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('L', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1">
                                <FormLabel htmlFor="talla-xl">XL</FormLabel>
                                <NumberInput id="talla-xl" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('XL', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1">
                                <FormLabel htmlFor="talla-xxl">XXL</FormLabel>
                                <NumberInput id="talla-xxl" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('XXL', e.target.value)} />
                                </NumberInput>
                            </Box>
                            <Box flex="1">
                                <FormLabel htmlFor="talla-xxxl">XXXL</FormLabel>
                                <NumberInput id="talla-xxxl" defaultValue={0} min={0}>
                                    <NumberInputField onChange={(e) => handleTalleChange('XXXL', e.target.value)} />
                                </NumberInput>
                            </Box>
                        </Flex>
                    </FormControl>

                </form>
            </Box>
        </Box>
    )
}
export default CrearProducto