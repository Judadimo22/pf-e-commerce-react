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
      <Td fontSize={{base:10,md:16}}>{email}</Td>
      <Td  display={{base:'none',md:'table-cell'}}>{id_pay}</Td>
      <Td display={{base:'none',md:'table-cell'}}>{items.map(p=> p.title.slice())}</Td>
      <Td>${transaction_amount}</Td>
      <Td fontSize={{base:10,md:16}}>{status}</Td>

    </Tr>
  );
}

export default OrderTracking;