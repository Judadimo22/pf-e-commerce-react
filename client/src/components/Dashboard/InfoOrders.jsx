import React from 'react';
import { Table, Td, Tr } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';

/* const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
}); */

function OrderTracking(props) {
  const { email, name, transaction_amount, status, id_pay, orderId, updateOrderStatus, items } = props;
  //const classes = useStyles();

  const handleUpdateStatusClick = (newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };
   items.map(e=>console.log(e.title))
  return (
    <Tr>
            {/* -------------------> user artibutes */}
            
  
  
            {/* ----------------------------------->*/}
      <Td>{email}</Td>
      <Td>{id_pay}</Td>
      <Td>{items.map(p=> p.title.slice())}</Td>
      <Td>${transaction_amount}</Td>
      <Td>{status}</Td>

    </Tr>
  );
}

export default OrderTracking;