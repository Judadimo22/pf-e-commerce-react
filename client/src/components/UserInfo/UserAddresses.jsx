import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Pagination } from "../Paginado/Paginado";
import AddressButton from "./AddressButton";
import AddAddressForm from "./AddAddressForm";

const addresses = [
  {
    country: "Ecuador",
    city: "ciudad 1",
    address: "street 1",
  },
  {
    country: "Ecuador",
    city: "ciudad 2",
    address: "street 2",
  },
  {
    country: "Ecuador",
    city: "ciudad 3",
    address: "street 3",
  },
  {
    country: "Ecuador",
    city: "ciudad 4",
    address: "street 4",
  },
  {
    country: "Ecuador",
    city: "ciudad 4",
    address: "street 4",
  },
];

const UserAddresses = () => {
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
    address: "",
  });

  const [isError, setIsError] = useState({
    country: false,
    city: false,
    address: false,
  });
  let error = input.country && input.city && input.address;
  //------------------------------------add form--------------------------------------------

  const addAddresSubmit = () => {
    console.log(!error);
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
    } else if (!input.address) {
      setIsError({
        ...isError,
        address: true,
      });
    }
    if (!error) return;
    else {
      setRenderInput(false);
      setInput({
        country: "",
        city: "",
        address: "",
      });
    }
  };

  const cancelSubmit = () => {
    setRenderInput(false);
    setInput({
      country: "",
      city: "",
      address: "",
    });
    setIsError({
      country: false,
      city: false,
      address: false,
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
                    <Tr>
                      <Td>{address.country}</Td>
                      <Td>{address.city}</Td>
                      <Td>{address.address}</Td>
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
          <AddressButton
            onClick={cancelSubmit}
            colSpan={3}
            content="Cancel"
          />
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
