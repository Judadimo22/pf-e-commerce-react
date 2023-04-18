import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
  Select,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothById, UpdateCloth } from "../../redux/actions";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineControl, AiOutlineCheckCircle } from "react-icons/ai";
import StockInput from "../FormCreate/StockInput";

const EditProduct = () => {
  const array20 = [
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
  ]
  const dispatch = useDispatch();
  const { id } = useParams();
  const [current, setCurrent] = useState({
    currentName: "",
  });
  const getProductId = useSelector((state) => state.Details);
  const [input, setInput] = useState({
    tallas: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      XXL: 0,
      XXXL: 0,
    }
  });

  const [inputInfo, setInputInfo] = useState({
    name: "",
    description: "",
    price: '',
    stock: "",
    trademark: "",
    type: "",
    categorie: "",
    active: ''
  }) 

  useEffect(() => {
    dispatch(getClothById(id));
  }, [id]);

  useEffect(() => {
    setInputInfo({
      name: getProductId.name,
      price: getProductId.price,
      description: getProductId.description,
      stock: getProductId.stock,
      trademark: getProductId.trademark,
      type: getProductId.type,
      categorie: getProductId.categorie,
      active: getProductId.active
    });
  }, [getProductId]);

  function handleInputChange(e) {
    e.preventDefault();
    setInputInfo({
      ...inputInfo,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleTalleChange = (content, stock) => {
    setInput({
      ...input,
      tallas: {...input.tallas,
        [content]: stock,
        }
    });
  };

  console.log(input)

  function handleSubmitInfo(e){
    e.preventDefault();
    alert("The product has been updated");
    dispatch(UpdateCloth(id, inputInfo));
    setInputInfo({
      name: e.target.value,
      description: e.target.value,
      price: e.target.value,
      stock: e.target.value,
      trademark: e.target.value,
      type: e.target.value,
      categorie: e.target.value,
      active: e.target.value
    });
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    alert("The sizes has been updated");
    console.log(input)
    const array = []
    const tallasToDB = () => {
      for (let key in input.tallas) {
        if (input.tallas[key] !== 0) {
          const obj = {
            talla: key,
            stock: input.tallas[key],
          };
          array.push(obj);
        }
      }
    };
    tallasToDB()
    const obj1 = {
      tallas: array
    }
    dispatch(UpdateCloth(id, obj1));

  }

  const categories = ["men", "women", "kid"];
  const trademarks = [
    "ADIDAS",
    "Nike",
    "Vandalia",
    "Oldtown Polo",
    "Topper",
    "Puma",
  ];
  const type = ["shirts", "pants", "hoodies", "hats"];

  const active = ['valid', 'invalid']

  return (
    <Box>
      <FormControl>
        <form onSubmit={handleSubmitInfo}>
          <Box display="flex" mb={5}>
            <Text fontWeight={1000} fontSize={30} mr={1}>
              EditProduct
            </Text>
          </Box>
          <Box textAlign="left" mr={20}>
            <Text fontSize={20} fontWeight={1000}>
              <strong>Name</strong>
            </Text>
            <Text>{getProductId.name}</Text>
          </Box>
          <Box textAlign="left" mr={20} mt={5}>
            <Text fontSize={20} fontWeight={1000}>
              <strong>Description</strong>
            </Text>
            <Text>{getProductId.description}</Text>
          </Box>
          <Box textAlign="left" mr={20} mt={5}>
            <Text fontSize={20} fontWeight={1000}>
              <strong>Price</strong>
            </Text>
            <Input
              onChange={(e) => handleInputChange(e)}
              key='price'
              name='price'
              bgColor="#fff"
              boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
              value={inputInfo.price}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" mt={5}>
            <Box
              w={420}
              borderRadius={10}
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Box textAlign="left" mr={20}>
                <FormLabel fontSize={20}>
                  <strong>Type</strong>
                </FormLabel>
                <Select
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  name="type"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select Type</option>
                  {type.map((type) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box
              w={420}
              borderRadius={10}
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Box textAlign="left" mr={20}>
                <FormLabel fontSize={20}>
                  <strong>Trademark</strong>
                </FormLabel>
                <Select
                  bgColor="#fff"
                  boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
                  name="trademark"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="">Select Trademark</option>
                  {trademarks.map((trademark) => (
                    <option value={trademark} key={trademark}>
                      {trademark}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
          <Box display='flex' justifyContent='space-between' mt={5}>
            <Box w={420}
              borderRadius={10}
              alignItems="center"
              display="flex"
              justifyContent="space-between">
            <Box textAlign="left" w={180}>
            <FormLabel fontSize={20}>
              <strong>Category</strong>
            </FormLabel>
            <Select
              bgColor="#fff"
              boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                        -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                        box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
              name="categorie"
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </Select>
          </Box>
            </Box>
            <Box w={420}
              borderRadius={10}
              alignItems="center"
              display="flex"
              justifyContent="space-between">
            <Box textAlign="left" w={180}>
            <FormLabel fontSize={20}>
              <strong>Active</strong>
            </FormLabel>
            <Select
              bgColor="#fff"
              boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                        -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                        box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
              name="active"
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">Select Active</option>
              {active.map((a) => (
                <option value={a} key={a}>
                  {a}
                </option>
              ))}
            </Select>
          </Box>
            </Box>
          </Box>

          <Box w="100%" textAlign="center" mt={5}>
            <Button w="100%" backgroundColor="#DAEB0F" type="submit">
              Update info
            </Button>
          </Box>
        </form>
        <form onSubmit={handleSubmit}>
        <Flex alignItems='center' textAlign="left" mr={20} mt={5}>
          {array20.map((i) => (
                      <StockInput
                        key={i.id}
                        id={i.id}
                        tallas={input.tallas}
                        talla={input.tallas?.[i.content]}
                        handleTalleChange={handleTalleChange}
                        content={i.content}
                        placeHolder={getProductId.tallas?.find(t => t.talla == i.content)?.stock ? getProductId.tallas?.find(t => t.talla == i.content)?.stock : 0  }
                      />
                    ))}
          <Button position='relative' top={2} backgroundColor="#DAEB0F" alignItems='center' type='submit'>Update Tallas</Button>
          </Flex>
        </form>
      </FormControl>
    </Box>
  );
};

export default EditProduct;
