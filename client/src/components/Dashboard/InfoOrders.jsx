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
      <Td>{email}</Td>
      <Td>{name}</Td>
      <Td>{totalAmount}</Td>
      <Td>{status}</Td>
    </Tr>
  );
}

export default OrderTracking;