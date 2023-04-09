import './App.css'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import { Details } from './components/Detail/Detail'
import ProductAdminPage from './components/FormCreate/FormCreate';
import LandingPage from './views/LandingPage/landingPage'
import Error404 from './views/Error/Error404'
import OrdersPage from './views/Admin/Orders';
import Dashboard from './views/Admin/Dashboard';
import UsersPage from './views/Admin/Users';
import ProductsAdmin from './views/Admin/Product'
import CartPage from './views/Cart/CartPage';


function App() {
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/*" element={<Error404 />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/create" element={<ProductAdminPage />} />
        <Route exact path="/admin/products" element={<ProductsAdmin />} />
        <Route exact path="/admin/orders" element={<OrdersPage />} />
        <Route exact path="/admin/users" element={<UsersPage />} />
        <Route exact path='/cart' element={<CartPage />} />
       </Routes>


      </div>
  </>);
}

export default App
