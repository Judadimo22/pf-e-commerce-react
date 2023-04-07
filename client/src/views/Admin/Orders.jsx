import React from 'react'
import OrderTrackingContainer from '../../components/Dashboard/AdmOrders'
import { TableContainer } from '@chakra-ui/react'

const OrdersPage = () => {
  return (
    <>
    <TableContainer maxWidth="90%">
        <OrderTrackingContainer/>
    </TableContainer>
    </>
  )
}

export default OrdersPage