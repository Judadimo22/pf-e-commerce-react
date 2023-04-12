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
import Playmet from "./views/Playmet/Playmet";
import MyProfile from "./components/UserProfile/MyProfile";
import Upload from './components/AddFiles/AddFiles'
import ImageUpload from './components/AddFiles/AddFiles'
import TableUsersContainer from './components/Dashboard/AdmUsers'
import AdmUsers from './components/Dashboard/AdmUsers'


import CartPage from './views/Cart/CartPage';
import UserEditPage from './views/User/UserEdit';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import UserEdit from './components/UserEdit/UserEdit';
import UserEditsPage from './views/Admin/UserEdit';

import axios from "axios"
axios.defaults.baseURL = "https://backend-pf-uh1o.onrender.com"
//axios.defaults.baseURL = "http://localhost:3001"


function App() {
  
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
        <Route exact path="/admin/users" element={<UsersPage/>} />
        <Route exact path="/add" element={<Upload/>} />
        <Route exact path="/user/edit" element={<UserEditPage/>} />
        <Route exact path="/user/:id" element={<UserPage />} />
        <Route exact path="/user/:id/orders" element={<UserPage />} />
        <Route exact path="/user/:id/notifications" element={<UserPage />} />
        <Route exact path="/playmet" element={<Playmet />} />
        <Route exact path="/Profile" element={<MyProfile />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path="/Update/:id" element={<UserEditsPage/>} />
       </Routes>
      </div>
    </>
  );
}

export default App;
