import React from 'react';
import { Table, Td, Tr } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';

/* const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
}); */

function OrderTracking(props) {
  const { email, name, totalAmount, status, orderId, updateOrderStatus } = props;
  //const classes = useStyles();

  const handleUpdateStatusClick = (newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  return (
    <Tr>
            {/* -------------------> user artibutes */}
            
  
  
            {/* ----------------------------------->*/}
      <Td fontSize={{base:10,md:16}}>{email}</Td>
      <Td  display={{base:'none',md:'table-cell'}}>{name}</Td>
      <Td display={{base:'none',md:'table-cell'}}>{totalAmount}</Td>
      <Td fontSize={{base:10,md:16}}>{status}</Td>
    </Tr>
  );
}

export default OrderTracking;