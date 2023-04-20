import React, { useEffect, useState } from "react";
import styles from "./ListCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../Card/Card";
import { Pagination } from "../Paginado/Paginado";
import { Filter, getClothes, setSearchInput } from "../../redux/actions";
import SortByPrice from "../Filters/SortByPrice";
import SearchBar from "../SearchBar/SearchBar";
import LoadingCards from "../Ux/LoadingCards";
import NotFoundFilters from "../Ux/NotFoundFilters";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ClearFilButton from "../Filters/ClearFilButton";
import ClearSearButton from "../Ux/ClearSearButton";
import NotFoundSearch from "../Ux/NotFoundSearch";

export const ListCard = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const filteredProducts = useSelector((state) => state.ClothesCopy);
  const searchInput = useSelector((state) => state.searchInput);
  const searchResults = useSelector((state) => state.searchResults);
  const type = useSelector((state) => state.filterInputs.byType);
  const category = useSelector((state) => state.filterInputs.byCategorie);
  const trademark = useSelector((state) => state.filterInputs.byTrademark);
  const resultsPerPage = 9;
  const numberOfResults = filteredProducts.length;
  const numberOfPages = numberOfResults
    ? Math.ceil(numberOfResults / resultsPerPage)
    : 0;
  const [pageNumber, setPageNumber] = useState(1);
  const pageSliceStart =
    pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage;
  const pageSliceEnd = pageNumber * resultsPerPage;

  const dispatch = useDispatch();
  useEffect(() => {
    setPageNumber(1);
  }, [numberOfResults]);
  useEffect(() => {
    getClothes();
    const getData = async () => {
      return dispatch(getClothes());
    };

    setProducts(getData());
  }, []);

  function sortProducts(type, list) {
    const sorted = list.sort((a, b) => {
      const isAsc = type === "asc";
      if (isAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    return sorted;
  }

  if ((type || category || trademark) && !filteredProducts.length)
    return (
      <Flex w="100%" justifyContent="center" alignItems="center" pr="30%">
        <NotFoundFilters />
      </Flex>
    );
  if ((searchInput.length) && !filteredProducts.length)
    return (
      <Flex w="100%" justifyContent="center" alignItems="center" pr="30%">
        <NotFoundSearch />
      </Flex>
    );

  return (
    <div>
      {filteredProducts.length ? (
        <Flex flexDir="column">
          {searchInput.length ? (
            <Flex justifyContent="space-between" w="90%" mb={5} >
              <Text>
                {searchResults} results for: {searchInput}
              </Text>
              <ClearSearButton/>
            </Flex>
          ) : null}
          <Box className={styles.product}>
            {filteredProducts
              .slice(pageSliceStart, pageSliceEnd)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </Box>
        </Flex>
      ) : (
        <Box className={styles.product}>
          <LoadingCards />
        </Box>
      )}
      <Pagination
        pageNumber={pageNumber}
        totalPages={numberOfPages}
        nextPageFn={() => setPageNumber((page) => page + 1)}
        prevPageFn={() => setPageNumber((page) => page - 1)}
      />
    </div>
  );
};
