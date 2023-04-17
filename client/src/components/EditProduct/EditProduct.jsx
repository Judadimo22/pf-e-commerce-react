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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothById, UpdateCloth } from "../../redux/actions";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineControl, AiOutlineCheckCircle } from "react-icons/ai";

const EditProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [current, setCurrent] = useState({
    currentName: "",
  });
  const getProductId = useSelector((state) => state.Details);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: getProductId.price,
    stock: "",
    trademark: "",
    type: "",
    categorie: "",
  });

  useEffect(() => {
    dispatch(getClothById(id));
  }, [id]);

  useEffect(() => {
    setInput({
      name: getProductId.name,
      price: getProductId.price,
      description: getProductId.description,
      stock: getProductId.stock,
      trademark: getProductId.trademark,
      type: getProductId.type,
      categorie: getProductId.categorie,
    });
  }, [getProductId]);

  function handleInputChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("The product has been updated");
    dispatch(UpdateCloth(id, input));
    setInput({
      name: e.target.value,
      description: e.target.value,
      price: e.target.value,
      stock: e.target.value,
      trademark: e.target.value,
      type: e.target.value,
      categorie: e.target.value,
    });
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

  return (
    <Box>
      <FormControl>
        <form onSubmit={handleSubmit}>
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
              bgColor="#fff"
              boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
              value={input.price}
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
          <Box w="100%" textAlign="center" mt={5}>
            <Button w="100%" backgroundColor="#DAEB0F" type="submit">
              Update
            </Button>
          </Box>
        </form>
      </FormControl>
    </Box>
  );
};

export default EditProduct;
