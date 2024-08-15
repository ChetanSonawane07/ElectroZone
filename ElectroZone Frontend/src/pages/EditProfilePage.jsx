import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import WishList from "../componants/WishList";
import Cart from "../componants/Cart";
import { useNavigate } from "react-router-dom";
import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";

initMDB({ Dropdown, Collapse });
function EditProfilePage() {
  
  return (
    <div>
      {/* <!-- Navbar --> */}

      <Navbar />

      <CategoryList />
      {/* <MainPage /> */}
      <Edit_Profile/>

      <br />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default EditProfilePage;
