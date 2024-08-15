import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import Wishlist from "../componants/WishList";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";

function WishlistPage() {

  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar />
      <Wishlist />

      <br />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default WishlistPage;
