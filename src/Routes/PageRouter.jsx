import React from "react";
import Store from "../pages/Store/Store";
import Product from "../pages/product/Product";
import {Route, Routes} from 'react-router-dom'


function PageRouter({open}) {
  return (
    <Routes>
      <Route path="/" element={<Store open={open} />} />
      <Route path="/product" element={<Product open={open} />} />
    </Routes>
  );
}

export default PageRouter;
