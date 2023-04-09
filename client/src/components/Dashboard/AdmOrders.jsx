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

function OrderTrackingContainer() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOrders())
  },[])

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
  const orders = useSelector((state) => state.orders)
  console.log(orders);

  return ( 
       <Table variant='simple' colorScheme="blackAlpha" >
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>Name</Th>
            <Th>Total amount</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
      {orders && orders?.map(order => (
        <OrderTracking
          key={order._id}
          email={order.email}
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

export default OrderTrackingContainer;

