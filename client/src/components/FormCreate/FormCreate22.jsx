import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Flex,
  Spacer,
  VStack,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import AdminNavBar from "../NavBar/AdminNavBar";
import StockInput from "./StockInput";
import Swal from "sweetalert2";

function CrearProducto() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");
  const [tallas, setTallas] = useState({
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    XXXL: 0,
  });
  const [trademark, setTrademark] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: '¡Success!',
      text: 'The product has been created',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Continue'
    })

    const newArray = [];
    const tallasToDB = () => {
      for (let key in tallas) {
        if (tallas[key] !== 0) {
          const obj = {
            talla: key,
            stock: tallas[key],
          };
          newArray.push(obj);
        }
      }
    };
    tallasToDB();

    // Subir imagen a Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "i5hof6um");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dlqnb6csq/image/upload",
      formData
    );
    const imageUrl = response.data.secure_url;

    // Guardar el resto de los datos en la base de datos en MongoDB

    const data = {
      name,
      description,
      categorie,
      type,
      tallas: newArray,
      trademark,
      image: imageUrl,
      price,
    };

    const response2 = await fetch(
      "https://backend-pf-uh1o.onrender.com/cloth",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const result = await response2.json();

    setName("");
    setDescription("");
    setCategorie("");
    setType("");
    setTrademark("");
    setTallas({
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0,
      XXXL: 0,
    });
    setImage("");
    setPrice(0);
  };

  const handleTalleChange = (content, stock) => {
    setTallas({
      ...tallas,
      [content]: stock,
    });
  };

  const array = [
    {
      id: "talla-xs",
      content: "XS",
    },
    {
      id: "talla-s",
      content: "S",
    },
    {
      id: "talla-m",
      content: "M",
    },
    {
      id: "talla-l",
      content: "L",
    },
  ];
  const array2 = [
    {
      id: "talla-xl",
      content: "XL",
    },
    {
      id: "talla-xxl",
      content: "XXL",
    },
    {
      id: "talla-xxxl",
      content: "XXXL",
    },
  ];

  return (
    <div>
      <Box minH="89vh" p={{base:0,md:"4"}}>
        <Heading fontFamily="inherit" as="h1" size="lg" m={[2, 1]}>
          Create Product
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex display={{base:'block',md:'flex'}}>
            <Box width="50%">
              <FormControl id="name" margin="2" isRequired>
                <FormLabel fontSize="18px">Name</FormLabel>
                <Input
                  w={{base:250,md:"90%"}}
                  type="text"
                  value={name}
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl margin="2" id="description" mt="4" isRequired>
                <FormLabel fontSize="18px">Description</FormLabel>
                <Input
                  w={{base:250,md:"90%"}}
                  height="100px"
                  type="text"
                  value={description}
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>

              <FormControl margin="2" id="tallas" mt="4">
                <FormLabel fontSize="18px">Sizes</FormLabel>
                <Flex flexDir="column">
                  <Flex spacing={4} direction="row" justifyContent="flex-start">
                    {array.map((i) => (
                      <StockInput
                        key={i.id}
                        id={i.id}
                        tallas={tallas}
                        talla={tallas[i.content]}
                        handleTalleChange={handleTalleChange}
                        content={i.content}
                      />
                    ))}
                  </Flex>
                  <Flex spacing={4} direction="row" justifyContent="flex-start">
                    {array2.map((i) => (
                      <StockInput
                        key={i.id}
                        id={i.id}
                        tallas={tallas}
                        talla={tallas[i.content]}
                        handleTalleChange={handleTalleChange}
                        content={i.content}
                      />
                    ))}

                    <Flex flex="1" />
                  </Flex>
                </Flex>
              </FormControl>
              <Button
                colorScheme="blackAlpha"
                variant="outline"
                type="submit"
                size="md"
                height="40px"
                width="150px"
                border="2px"
                margin="4"
              >
                Create
              </Button>
            </Box>

            <Box width="50%" position="relative" bottom={2}>
              <FormControl margin="2" id="trademark" mt="4" isRequired>
                <FormLabel fontSize="18px">Mark</FormLabel>
                <Input
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                                    -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                                    box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                   w={{base:250,md:"90%"}}
                  type="text"
                  value={trademark}
                  onChange={(e) => setTrademark(e.target.value)}
                />
              </FormControl>

              <FormControl margin="2" id="price" mt="4" isRequired>
                <FormLabel fontSize="18px">Price</FormLabel>
                <NumberInput
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                                    -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                                    box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  value={price}
                  min={0}
                  precision={2}
                  step={0.01}
                  w={{base:250,md:"90%"}}
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

              <FormControl margin="2" id="tipo-prenda" mt="4" isRequired>
                <FormLabel fontSize="18px">Type</FormLabel>
                <Select
                  w={{base:250,md:"90%"}}
                  value={type}
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="pants">Pants</option>
                  <option value="shirts">Shirts</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="hats">Hats</option>
                </Select>
              </FormControl>

              <FormControl margin="2" id="categorie" mt="4" isRequired>
                <FormLabel fontSize="18px">Category</FormLabel>
                <Select
                  w={{base:250,md:"90%"}}
                  placeholder="Seleccionar categoría"
                  value={categorie}
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  onChange={(e) => setCategorie(e.target.value)}
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kid">Kid</option>
                </Select>
              </FormControl>

              <FormControl margin="2" isRequired>
                <FormLabel fontSize="18px">Image</FormLabel>
                <Input
                  w={{base:250,md:"90%"}}
                  type="file"
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormControl>
            </Box>
          </Flex>
        </form>
      </Box>
    </div>
  );
}
export default CrearProducto;
