import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import WishList from "../componants/WishList";
import Cart from "../componants/Cart";
import ProductDetails from "../componants/ProductDetails";
import { useNavigate } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

initMDB({ Dropdown, Collapse });
function ProductDetailsPage() {
  
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar />
      <CategoryList />
      <br />
      <ProductDetails />

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default ProductDetailsPage;
