import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderTracking from './InfoOrders';
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions';



/* const orders = [
{
  _id:1,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:1566
},
{
  _id:2,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:5656561
},
{
  _id:3,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:456456
}
] */

function UserOrders() {

  const dispatch = useDispatch()
  useEffect(()=>{
    //dispatch(getOrders())
  },[])

  
  const orders = useSelector((state) => state.orders)

  return ( 
       <Table variant='simple' colorScheme="blackAlpha" >
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Date</Th>
            <Th>Total amount</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
      {orders && orders?.map(order => (
        <OrderTracking
          key={order._id}
          name={order.name}
          totalAmount={order.totalAmount}
          status={order.status}
          orderId={order._id}
          updateOrderStatus={handleUpdateOrderStatus}
        />
        ))}
        </Tbody>
    </Table>  
  );
}

export default UserOrders;

