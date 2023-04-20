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


import CartPage from './views/Cart/CartPage';
import UserEditPage from './views/User/UserEdit';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import UserEditsPage from './views/Admin/UserEdit';
import Questions from './components/Questions/Questions.jsx';
import axios from "axios"
import AddressesPage from './views/User/AddressesPage';
import UserOrdersPage from './views/User/UserOrdersPage';
import ProductEditPage from './views/Admin/ProductEdit';
import CreateProduct from './views/Admin/CreateProduct';
import UserNotification from './views/User/UserNotification';
axios.defaults.baseURL = "https://backend-pf-uh1o.onrender.com"
// axios.defaults.baseURL = "http://localhost:3001"


function App() {
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/*" element={<Error404 />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/create" element={<CreateProduct/>} />
        <Route exact path="/admin/products" element={<ProductsAdmin />} />
        <Route exact path="/admin/orders" element={<OrdersPage />} />
        <Route exact path="/admin/users" element={<UsersPage/>} />
        <Route exact path="/add" element={<Upload/>} />
        <Route exact path="/user/edit/:id" element={<UserEditPage/>} />
        <Route exact path="/user/:id" element={<UserPage />} />
        <Route exact path="/user/orders/:id" element={<UserOrdersPage />} />
        <Route exact path="/user/notifications/:id" element={<UserNotification/>} />
        <Route exact path="/user/addresses/:id" element={<AddressesPage/>} />
        <Route exact path="/playmet" element={<Playmet />} />
        <Route exact path="/Profile" element={<MyProfile />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path="/Update/:id" element={<UserEditsPage/>} />
        <Route exact path="/product/edit/:id" element={<ProductEditPage/>} />
        <Route exact path='/preg-frecuentes' element={<Questions/>}/>
       </Routes>
      </div>
    </>
  );
}

export default App;
