import { useState } from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Select, Checkbox, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, Flex, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { PostCloth } from '../../redux/actions';

function CrearProducto() {
    const dispatch = useDispatch
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tipoPrenda, setTipoPrenda] = useState('');
    const [talles, setTalles] = useState([]);
    const [stock, setStock] = useState({});
    const [marca, setMarca] = useState('');
    const [images, setImages] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar datos
        if (name === '') {
            alert('Por favor ingrese un name para el producto');
            return;
        }

        // Enviar datos a la base de datos de MongoDB
        const data = {
            name:name,
            description:description,
            categoria:categoria,
            tipoPrenda:tipoPrenda,
            talles:talles,
            stock:stock,
            marca:marca,
            images:["https://http2.mlstatic.com/D_NQ_NP_806215-MLA52615217426_112022-O.webp","https://http2.mlstatic.com/D_NQ_NP_806215-MLA52615217426_112022-O.webp"],
        };
        console.log(data);
        dispatch(PostCloth(data))
            .then(response => {
                console.log('Producto creado:', response.data);
                // Limpiar formulario
                setName('');
                setDescription('');
                setCategoria('');
                setTipoPrenda('');
                setTalles([]);
                setStock({});
                setMarca('');
                setImages([]);
            })
            .catch(error => {
                console.error('Error al crear el producto:', error);
            });
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

                    <FormControl id="categoria" mt="4" isRequired> 
                        <FormLabel>Categoría</FormLabel>
                        <Select placeholder="Seleccionar categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="niño">Niño</option>
                        </Select>
                    </FormControl>

                    <FormControl id="tipo-prenda" mt="4" isRequired>
                        <FormLabel>Tipo de prenda</FormLabel>
                        <Select value={tipoPrenda} onChange={(e) => setTipoPrenda(e.target.value)}>
                            <option value="pantalon">Pantalón</option>
                            <option value="remera">Remera</option>
                            <option value="abrigo">Abrigo</option>
                            <option value="gorra">Gorra</option>
                        </Select>
                    </FormControl>

                    <FormControl id="TradeMark" mt="4" >
                        <FormLabel>TradeMark</FormLabel>
                        <Flex flexWrap="wrap">
                            {["ADIDAS","Nike","Vandalia", "Oldtown Polo", "Topper", "Puma"].map((tradeMark) => (
                                <Box key={tradeMark} mr="4" mb="4">
                                    <Checkbox value={tradeMark} isChecked={marca.includes(tradeMark)} onChange={(e) => {
                                        if (e.target.checked) {
                                            setMarca([...marca, tradeMark]);
                                        } else {
                                            setMarca(marca.filter((value) => value !== tradeMark));
                                        }
                                    }}>
                                        {tradeMark}
                                    </Checkbox>
                                </Box>
                            ))}
                        </Flex>
                    </FormControl>

                    <FormControl id="talles" mt="4" >
                        <FormLabel>Talles</FormLabel>
                        <Flex flexWrap="wrap">
                            {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((talle) => (
                                <Box key={talle} mr="4" mb="4">
                                    <Checkbox value={talle} isChecked={talles.includes(talle)} onChange={(e) => {
                                        if (e.target.checked) {
                                            setTalles([...talles, talle]);
                                        } else {
                                            setTalles(talles.filter((value) => value !== talle));
                                        }
                                    }}>
                                        {talle}
                                    </Checkbox>
                                </Box>
                            ))}
                        </Flex>
                    </FormControl>

                    <FormControl id="stock" mt="4" isRequired>
                        <FormLabel>Stock</FormLabel>
                        {talles.map((talle) => (
                            <Box key={talle} mb="4">
                                <FormLabel>{talle}</FormLabel>
                                <NumberInput defaultValue={0} min={0}>
                                    <NumberInputField value={stock[talle] || ''} onChange={(e) => setStock({ ...stock, [talle]: e.target.value })} />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Box>
                        ))}
                    </FormControl>
                </form>
            </Box>
        </Box>)
}

export default CrearProducto