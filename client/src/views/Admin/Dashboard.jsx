import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const nav= [
      {
          icon:TbDeviceDesktopAnalytics,
          title:"Dashboard",
          redirect:"/admin"
      },
      {
          icon:TbShirt,
          title:"Products",
          redirect:"/admin/products"
      },
      {
          icon:FiUsers,
          title:"Users",
          redirect:"/admin/users"
      },
      {
          icon:TbTruck,
          title:"Orders",
          redirect:"/admin/orders"
      },
  ]
  
    return (
      <>
        <AdminNavBar/>
          <DashboardLeftMenu nav={nav}/>
      </>
  )
}

export default Dashboard