import { Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Service from "../Components/Service";
import ProductDetails from "../Components/ProductDetails";
import ServiceDetails from "../Components/ServiceDetails";

const Mainrouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/details/:name" element={<ProductDetails/>} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Service/Details" element={<ServiceDetails />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default Mainrouts;
