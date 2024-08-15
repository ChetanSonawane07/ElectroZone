import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import CategoryList from "../componants/CategoryList";
import { useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import WishList from "../componants/WishList";
import Cart from "../componants/Cart";
import Products from "../componants/Products";
import { useNavigate } from "react-router-dom";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

initMDB({ Dropdown, Collapse });
function ProductPage() {
  const [activeComponent, setActiveComponent] = useState("Home");
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <MainPage />;
      case "Edit-Profile":
        return <Edit_Profile />;
      case "Add-Address":
        return <AddAddress />;
      case "My-WishList":
        return navigate('/WishList');
      case "My-Cart":
        return navigate('/Cart');
      case "View-Orders":
        return navigate("/Orders");
    }
  };
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar
        onBecomeSeller={() => handleNavigation("/Seller-Register")}
        onUserLogin={() => handleNavigation("/User-Login")}
        onNavigateToAboutUs={() => handleNavigation("/AboutUs")}
        setActiveComponent={setActiveComponent}
      />

      <CategoryList />
      <br />
      <Products />

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default ProductPage;
