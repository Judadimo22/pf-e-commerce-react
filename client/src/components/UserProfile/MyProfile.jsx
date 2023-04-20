import {
  Box,
  Input,
  Button,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Grid,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AddAddressForm from "../UserInfo/AddAddressForm";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function UserForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.user.location);
  const [phone, setPhone] = useState("");
  const [input, setInput] = useState({
    country: "",
    city: "",
    addres: "",
  });

  const [isError, setIsError] = useState({
    country: false,
    city: false,
    addres: false,
    phone: false,
  });

  const [swi, setSwi] = useState(false);
  //------------------------------------add form--------------------------------------------

  const addAddresSubmit = () => {
    if (!input.country) {
      setIsError({
        ...isError,
        country: true,
      });
    } else if (!input.city) {
      setIsError({
        ...isError,
        city: true,
      });
    } else if (!input.addres) {
      setIsError({
        ...isError,
        addres: true,
      });
    } else if (!phone) {
      setIsError({
        ...isError,
        phone: true,
      });
    }

    if (!input.country || !input.city || !input.addres || !phone) {
      return;
    } else {
      setSwi(swi == true ? false : true);
      const location = {
        phone: phone,
        location: [input, ...addresses],
      };
      console.log(location);
      dispatch(updateUser(id, location));
      setInput({
        country: "",
        city: "",
        addres: "",
      });
      setPhone("");
    }
  };

  const handleInputChange = (e) => {
    console.log(e);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.value == "") {
      setIsError({
        ...isError,
        [e.target.name]: true,
      });
    } else {
      setIsError({
        ...isError,
        [e.target.name]: false,
      });
    }
  };

  return (
    <Flex h="91.1vh" w="100%" flexDir="column" p={{base:0,md:"50px 300px"}} mx={{base:5, md:0}}>
      <Flex width="100%" mb="60px" justifyContent="center">
        <Heading as="h1" size="3xl">
          Complete your profile
        </Heading>
      </Flex>
      <Flex w="100%" flexDir="column">
        <FormLabel>Phone</FormLabel>
        <FormControl
          w="100%"
          height="2.5rem"
          mb="20px"
          isInvalid={isError.phone}
        >
          <PhoneInput
            name="phone"
            defaultCountry="US"
            value={phone}
            onChange={setPhone}
            style={{
              boxShadow: "1px 1px 2px 0.5px rgba(0,0,0,0.15)",
              height: "100%",
              backgroundColor: "#fff",
              borderRadius: "0.375rem",
              padding: "0 15px",
            }}
          />
          {!phone ? null : (
            <FormErrorMessage>Phone is required.</FormErrorMessage>
          )}
        </FormControl>
      </Flex>
      <Flex flexDir="column">
        <Grid mb="40px">
          <AddAddressForm
            input={input}
            setInput={setInput}
            isError={isError}
            setIsError={setIsError}
          />
        </Grid>
        <Link to="/home">
          <Button
            w="100%"
            bgColor="#272727"
            color="#f2f2f2"
            _hover={{
              bgColor: "#fff",
              color: "#272727",
              border: "1px solid #272727",
            }}
            onClick={addAddresSubmit}
          >
            Continue
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
