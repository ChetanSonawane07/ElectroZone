import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import { useNavigate } from "react-router-dom";
import OrderItem from "../componants/OrderItem";
import OrderItems from "../componants/OrderItems";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

initMDB({ Dropdown, Collapse });
function OrdersPage() {
  
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar />
     
      <CategoryList />
      <br />
      <OrderItems userId={sessionStorage.getItem('id')} />
      <br />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default OrdersPage;
