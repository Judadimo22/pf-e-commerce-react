import { useState } from "react";
import "./App.css";
import Home from "./views/Home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Details } from "./components/Detail/Detail";
import ProductAdminPage from "./components/FormCreate/FormCreate";
import LandingPage from "./views/LandingPage/landingPage";
import Error404 from "./views/Error/Error404";
import Playmet from "./views/Playmet/Playmet";
import MyProfile from "./components/UserProfile/MyProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create" element={<ProductAdminPage />} />
          <Route exact path="/playmet" element={<Playmet />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/Profile" element={<MyProfile />} />
          <Route exact path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
