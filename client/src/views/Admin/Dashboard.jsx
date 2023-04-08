import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'

const Dashboard = () => {
  return (
    <>
    <AdminNavBar/>
    <DashboardLeftMenu/>
    </>
  )
}

export default Dashboard