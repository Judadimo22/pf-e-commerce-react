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
        const formData = new FormData(e.target);
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("categorie", categorie);
        formData.append("tallas", JSON.stringify(tallas));
        formData.append("trademark", trademark);
        formData.append("price", price);
        console.log('formData', formData)
        const response = await fetch("/cloth", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        console.log(data);
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
                        <FormLabel>Nombre</FormLabel>
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl id="description" mt="4" isRequired>
                        <FormLabel>Descripción</FormLabel>
                        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>
                    <FormControl id="categorie" mt="4" isRequired>
                        <FormLabel>Categoría</FormLabel>
                        <Select placeholder="Seleccionar categoría" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="niño">Niño</option>
                        </Select>
                    </FormControl>

                    <FormControl id="tipo-prenda" mt="4" isRequired>
                        <FormLabel>Tipo de prenda</FormLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="pantalon">Pantalón</option>
                            <option value="remera">Remera</option>
                            <option value="abrigo">Abrigo</option>
                            <option value="gorra">Gorra</option>
                        </Select>
                    </FormControl>
                    <FormControl id="trademark" mt="4" isRequired>
                        <FormLabel>Marca</FormLabel>
                        <Input type="text" value={trademark} onChange={(e) => setTrademark(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Imagen</FormLabel>
                        <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        {/* <Button onClick={handleImageUpload}>Cargar imagen</Button> */}
                    </FormControl>
                    <FormControl id="price" mt="4">
                        <FormLabel>Precio</FormLabel>
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