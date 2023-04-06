import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderTracking from './InfoOrders';
import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";



const orders = [
{
    key:1,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:1566
},
{
    key:2,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:5656561
},
{
    key:3,
    email:"asdasd@gmail.com",
    name:"asdasd",
    totalAmount:8,
    status:"Pagada",
    orderId:456456
}

]

function OrderTrackingContainer() {
  /* const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get('https://my-api.com/orders'); // Cambia esto por la URL de tu API que devuelve las órdenes de la base de datos en MongoDB
      setOrders(response.data);
    }
    fetchOrders();
  }, []); */

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    /* try {
      await axios.put(`https://my-api.com/orders/${orderId}`, { status: newStatus }); // Cambia esto por la URL de tu API que actualiza el estado de la orden en la base de datos en MongoDB
      const updatedOrders = orders.map(order => {
        if (order._id === orderId) {
          return {
            ...order,
            status: newStatus
          };
        }
        return order;
      });
      setOrders(updatedOrders);
    } catch (error) {
      console.error(error);
    } */
  };

  return ( 
       <Table variant='simple' colorScheme="blackAlpha" >
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Nombre</Th>
            <Th>Monto total</Th>
            <Th>Estado</Th>
          </Tr>
        </Thead>
      {orders.map(order => (
        <Tbody>
        <OrderTracking
          key={order._id}
          email={order.email}
          name={order.name}
          totalAmount={order.totalAmount}
          status={order.status}
          orderId={order._id}
          updateOrderStatus={handleUpdateOrderStatus}
        />
     </Tbody>
      ))}
    </Table>  
  );
}

export default OrderTrackingContainer;

