import React, { useEffect } from "react";
import style from "../UserInfo/UserInfo.module.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { TbMap2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import LoadingText from "./LoadingText";
import InfoCard from './InfoCard'
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

function UserInfo() {
  const { id } = useParams;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);


  return (
    <Grid
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(9, 1fr)"
      gap={3.5}
      w="100%"
    >
      <GridItem colSpan={1} rowSpan={8} />
      <GridItem colSpan={4}>
        <Flex h="100%" width="100%" alignItems="flex-end">
          <Heading fontFamily="Jaldi" size="2xl" color="#272727">
            Personal Information
          </Heading>
        </Flex>
      </GridItem>
      <GridItem colSpan={4} />
      <GridItem colSpan={4}>
        <Flex h="100%" width="100%" alignItems="flex-start">
          <Text color="#272727">
            Manage your personal information, including country, phone number and email
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={4} />

      <InfoCard
        header="Country"
        info={user.location[user.location.length-1].country}
        icon={TbMap2}
        conditional={!user.location[user.location.length-1].country}
      />

      <GridItem colSpan={1} />

      <InfoCard
        header="Phone"
        info={user.phone}
        icon={FiPhone}
        conditional={!user.phone}
      />
      <GridItem colSpan={1} />
      <GridItem colSpan={1} />
      <GridItem colSpan={1} />
      <GridItem colSpan={8} />
      <InfoCard
        header="Email"
        info={user.email}
        icon={HiOutlineMail}
        conditional={!user.email}
      />
    </Grid>
  );
}

export default UserInfo;
