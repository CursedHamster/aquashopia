import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Assortment from "./components/pages/Assortment";
import AboutUs from "./components/pages/AboutUs";
import Help from "./components/pages/Help";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Cart from "./components/pages/Cart";
import ErrorPage from "./components/pages/ErrorPage";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  const [isTransparent, setTransparent] = useState(true);
  const toggleTransparent = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isTransparent) {
      setTransparent(true);
    } else if (!entry.isIntersecting && isTransparent) {
      setTransparent(false);
    }
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar isTransparent={isTransparent} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home toggleTransparent={toggleTransparent} />}
          />
          <Route path="/assortment" exact element={<Assortment />} />
          <Route path="/assortment/:category" exact element={<Assortment />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/help" exact element={<Help />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/sign-in" exact element={<SignIn />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*" exact element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
