import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import Cart from "../componants/Cart";
import Products from "../componants/Products";
import { useNavigate } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

initMDB({ Dropdown, Collapse });
function CartPage() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar/>

      <Cart />

      <br />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CartPage;
