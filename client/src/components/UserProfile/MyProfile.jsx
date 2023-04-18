import { Box, Input, Button, GridItem, FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import AddAddressForm from "../UserInfo/AddAddressForm"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";


export default function UserForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.user.location);
  const [input, setInput] = useState({
    country: "",
    city: "",
    addres: "",
    phone: "",
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
    } else if (!input.phone) {
      setIsError({
        ...isError,
        phone: true,
      });
    }

    if (!input.country || !input.city || !input.addres || !input.phone) {
      return;
    } else {
      setSwi(swi == true ? false : true);
      const location = { location: [input, ...addresses] };
      dispatch(updateUser(id, location));
      setInput({
        country: "",
        city: "",
        addres: "",
        phone: "",
      });
    }
  };

  const handleInputChange = (e) => {
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
    <Box as="form">
      <GridItem colSpan={7} rowSpan={1}>
        <FormControl isInvalid={isError.phone}>
          <FormLabel>Phone</FormLabel>
          <PhoneInput
            name="phone"
            defaultCountry="US"
            value={input.phone}
            onChange={(phone) => setInput({ ...input, phone })}
            bgColor="#fff"
            style={{ boxShadow: "1px 1px 2px 0.5px rgba(0,0,0,0.15)" }}
          />
          <FormHelperText>Start with your country prefix</FormHelperText>
          {!isError.phone ? null : (
            <FormErrorMessage>Phone is required.</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <AddAddressForm
        input={input}
        setInput={setInput}
        isError={isError}
        setIsError={setIsError} />

      <Button onClick={addAddresSubmit}>Continue</Button>
    </Box>
  );
}

