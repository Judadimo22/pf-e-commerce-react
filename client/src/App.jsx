import './App.css'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { Details } from './components/Detail/Detail'
import ProductAdminPage from './components/FormCreate/FormCreate';
import LandingPage from './views/LandingPage/landingPage'
import Error404 from './views/Error/Error404'
import OrderTrackingContainer from './components/Dashboard/AdmOrders';
import Dashboard from './views/Dashboard/Dashboard';


function App() {
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/form" element={<ProductAdminPage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route exact path="/*" element={<Error404 />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/products" element={<OrderTrackingContainer />} />
        <Route exact path="/admin/users" element={<OrderTrackingContainer />} />
       </Routes>


      </div>
  </>);
}

export default App
