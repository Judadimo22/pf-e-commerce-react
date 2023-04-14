import { useState } from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Select, Checkbox, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, Flex, Spacer, VStack, Image, } from '@chakra-ui/react';
import axios from 'axios';
import AdminNavBar from '../NavBar/AdminNavBar';

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
        <div>
            <AdminNavBar />
            <Box minH='89vh' p="4">
                <Heading fontFamily='inherit' as="h1" size='lg' m={[2, 1]}>Create Produc</Heading>
                <form onSubmit={handleSubmit}>

                    <Flex >
                        <Box width='50%'>
                            <FormControl id="name" margin='2' isRequired>
                                <FormLabel fontSize='18px'>Name</FormLabel>
                                <Input w={550} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </FormControl>

                            <FormControl  margin='2'  id="description" mt="4" isRequired>
                                <FormLabel fontSize='18px'>Description</FormLabel>
                                <Input w={550} height="100px" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </FormControl>

                            <FormControl  margin='2' id="tallas" mt="4">
                                <FormLabel fontSize='18px'>Sizes</FormLabel>
                                <Flex flexDir='column'  >
                                    <Flex spacing={4} direction='row' justifyContent='flex-start' >
                                        <Flex flexDir='column'   mr="9" >
                                            <FormLabel w='100%' h='3' htmlFor="talla-xs" textAlign='center' fontSize='14px'>XS</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-xs" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('XS', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex flexDir='column'   mr="9"  >
                                            <FormLabel w='100%' h='3' htmlFor="talla-s" textAlign='center' fontSize='14px'>S</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-s" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('S', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex flexDir='column'  mr="9">
                                            <FormLabel w='100%' h='3' htmlFor="talla-m" textAlign='center' fontSize='14px'>M</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-m" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('M', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex flexDir='column'  mr="9"  >
                                            <FormLabel w='100%' h='3' htmlFor="talla-l" textAlign='center' fontSize='14px'>L</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-l" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('L', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                    </Flex>

                                    <Flex spacing={4} direction='row'  justifyContent='flex-start'  >
                                        <Flex flexDir='column'  mr='9' >
                                            <FormLabel w='100%' h='3' htmlFor="talla-xl" textAlign='center' fontSize='14px'>XL</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-xl" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('XL', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex flexDir='column'  mr='9'  >
                                            <FormLabel w='100%'  h='3' htmlFor="talla-xxl" textAlign='center' fontSize='14px'>XXL</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-xxl" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('XXL', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex flexDir='column'  mr='9'>
                                            <FormLabel w='100%'  h='3' htmlFor="talla-xxxl" textAlign='center' fontSize='14px'>XXXL</FormLabel>
                                            <NumberInput size='md' maxW={16} id="talla-xxxl" defaultValue={0} min={0}>
                                                <NumberInputField onChange={(e) => handleTalleChange('XXXL', e.target.value)} />
                                            </NumberInput>
                                        </Flex>
                                        <Flex  flex="1">
                                        </Flex>

                                    </Flex>

                                </Flex>
                            </FormControl>
                            <Button colorScheme='blackAlpha' variant='outline' type='submit' size='md' height='40px' width='150px' border='2px' margin='4' >Create</Button>

                        </Box>


                        <Box width='50%' position = 'relative' bottom={2}>

                            <FormControl   margin='2' id="trademark" mt="4" isRequired>
                                <FormLabel  fontSize='18px'>Mark</FormLabel>
                                <Input w={550} type="text" value={trademark} onChange={(e) => setTrademark(e.target.value)} />
                            </FormControl>

                            <FormControl  margin='2'  id="price" mt="4" isRequired>
                                <FormLabel  fontSize='18px'>Price</FormLabel>
                                <NumberInput
                                    defaultValue={isNaN(price) ? 0 : price}
                                    min={0}
                                    precision={2}
                                    step={0.01}
                                    w={550}
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


                            <FormControl  margin='2' id="tipo-prenda" mt="4" isRequired>
                                <FormLabel  fontSize='18px' >Type</FormLabel>
                                <Select w={550} value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="">Select an option</option>
                                    <option value="pants">Pants</option>
                                    <option value="shirts">Shirts</option>
                                    <option value="hoodies">Hoodies</option>
                                    <option value="hats">Hats</option>
                                </Select>
                            </FormControl>

                            <FormControl  margin='2' id="categorie" mt="4" isRequired>
                                <FormLabel  fontSize='18px' >Category</FormLabel>
                                <Select w={550} placeholder="Seleccionar categoría" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                                    <option value="men">Men</option>
                                    <option value="women">Women</option>
                                    <option value="kid">Kid</option>
                                </Select>
                            </FormControl>

                            <FormControl  margin='2' isRequired>
                                <FormLabel  fontSize='18px' >Image</FormLabel>
                                <Input w='550' type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </FormControl>
                            
                        </Box>

                    </Flex>

                </form>

            </Box>
        </div>
    )
}
export default CrearProducto