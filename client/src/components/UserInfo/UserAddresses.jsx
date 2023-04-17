import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Pagination } from "../Paginado/Paginado";
import AddressButton from "./AddressButton";
import AddAddressForm from "./AddAddressForm";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { VscEdit } from "react-icons/vsc";
import { HiOutlineTrash } from "react-icons/hi";

const UserAddresses = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const addresses = useSelector((state) => state.user.location);
  const [swi, setSwi] = useState(false);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [swi]);

  //------------------------------pagination----------------------------------------------
  const resultsPerPage = 4;
  const numberOfResults = addresses.length;
  const numberOfPages = numberOfResults
    ? Math.ceil(numberOfResults / resultsPerPage)
    : 0;
  const [pageNumber, setPageNumber] = useState(1);
  const pageSliceStart =
    pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage;
  const pageSliceEnd = pageNumber * resultsPerPage;
  //------------------------------pagination----------------------------------------------
  //----------------------------------add form-----------------------------------------------

  const [renderInput, setRenderInput] = useState(false);
  const [input, setInput] = useState({
    country: "",
    city: "",
    addres: "",
  });

  const [isError, setIsError] = useState({
    country: false,
    city: false,
    addres: false,
  });
  //------------------------------------add form--------------------------------------------

  const addAddresSubmit = () => {
    if (!input.country) {
      console.log("asd");
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
    }

    if (!input.country || !input.city || !input.addres) {
      console.log(input);
      return;
    } else {
      setSwi(swi == true ? false : true);
      console.log(id);
      const location = { location: [input,...addresses] };
      dispatch(updateUser(id, location));
      setRenderInput(false);
      setInput({
        country: "",
        city: "",
        addres: "",
      });
    }
  };
  const deleteAddress = (index) =>{
    const locationsFiltereds = addresses.filter(address=>(address._id !== index))
    const location = { location: locationsFiltereds };

    console.log(location);
    dispatch(updateUser(id, location));
    setSwi(swi == true ? false : true);
  }
  const cancelSubmit = () => {
    setRenderInput(false);
    setInput({
      country: "",
      city: "",
      addres: "",
    });
    setIsError({
      country: false,
      city: false,
      addres: false,
    });
  };
  return (
    <Grid
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(9, 1fr)"
      gap={3.5}
      w="100%"
    >
      <GridItem colSpan={1} rowSpan={renderInput == true ? 12 : 8} />
      <GridItem colSpan={4}>
        <Flex h="100%" width="100%" alignItems="flex-end">
          <Heading fontFamily="Jaldi" size="2xl" color="#272727">
            Addresses
          </Heading>
        </Flex>
      </GridItem>
      <GridItem colSpan={4} />
      <GridItem colSpan={4}>
        <Flex h="100%" width="100%" alignItems="flex-start">
          <Text color="#272727">
            Manage the locations to which you want your purchases to be
            delivered
          </Text>
        </Flex>
      </GridItem>

      <GridItem
        colSpan={7}
        rowSpan={4}
        bgColor="#fff"
        p="15px"
        borderRadius="20px"
        boxShadow="-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);"
      >
        <Flex h="100%" flexDir="column" justifyContent="space-between">
          <TableContainer w="100%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Country</Th>
                  <Th>City</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody>
                {addresses
                  .slice(pageSliceStart, pageSliceEnd)
                  .map((address) => (
                    <Tr key={address._id}>
                      <Td>{address.country}</Td>
                      <Td>{address.city}</Td>
                      <Td>{address.addres}</Td>
                      <Td p={0}>
                        <Icon cursor="pointer" onClick={()=>deleteAddress(address._id)} as={HiOutlineTrash} boxSize={6} />
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent="center" w="100%">
            <Pagination
              pageNumber={pageNumber}
              totalPages={numberOfPages}
              nextPageFn={() => setPageNumber((page) => page + 1)}
              prevPageFn={() => setPageNumber((page) => page - 1)}
            />
          </Flex>
        </Flex>
      </GridItem>

      {renderInput == true ? (
        <>
          <AddAddressForm
            input={input}
            setInput={setInput}
            isError={isError}
            setIsError={setIsError}
          />
          <AddressButton onClick={cancelSubmit} colSpan={3} content="Cancel" />
          <GridItem colSpan={1} />
          <AddressButton
            onClick={addAddresSubmit}
            colSpan={3}
            content="Add Address"
          />
        </>
      ) : (
        <AddressButton
          onClick={() => {
            setRenderInput(true);
          }}
          colSpan={7}
          content="Add Address"
        />
      )}
    </Grid>
  );
};

export default UserAddresses;
