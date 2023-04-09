import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import { Details } from './components/Detail/Detail'
import CrearProducto from './components/FormCreate/FormCreate22';
import LandingPage from './views/LandingPage/landingPage'
import Error404 from './views/Error/Error404'
import OrdersPage from './views/Admin/Orders';
import Dashboard from './views/Admin/Dashboard';
import UsersPage from './views/Admin/Users';
import ProductsAdmin from './views/Admin/Product'
import UserPage from './views/User/UserPage'


function App() {
const [count, setCount] = useState(0)
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/*" element={<Error404 />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/create" element={<CrearProducto />} />
        <Route exact path="/admin/products" element={<ProductsAdmin />} />
        <Route exact path="/admin/orders" element={<OrdersPage />} />
        <Route exact path="/admin/users" element={<UsersPage />} />
        <Route exact path="/user/:id" element={<UserPage />} />
       </Routes>
      </div>
  </>);
}

export default App
