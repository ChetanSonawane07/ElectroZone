import { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import MainPage from "../componants/Main-page";
import Edit_Profile from "../componants/Edit_Profile";
import AddAddress from "../componants/Add-Address";
import { getAddress } from '../services/address';
import { useNavigate } from "react-router-dom";
import PaymentApi from "../services/Paymentapi";
import AddressList from '../componants/AddressList';
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";
import { useSelector } from "react-redux";


function CheckoutPage() {

  const userId = sessionStorage.getItem('id'); // Replace with actual user ID

  const [activeComponent, setActiveComponent] = useState("Home");
  const cartItems = useSelector(state => state.cart);
  const grandTotal = useSelector(state => state.grandTotal);
  
  console.log({cartItems, grandTotal});
  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const navigateToAboutUs = () => {
    navigate("/AboutUs");
  };

  // const payMethod = {
  //    UPI,
  //     CREDIT_CARD,
  //     DEBIT_CARD,
  //     INTERNET_BANKING
  // }

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getAddress(userId);
        setAddresses(items || []);

      } catch (error) {
        console.error('Error fetching cart items:', error);
        setAddresses([]);
      }
    };
    fetchCartItems();
  }, [userId]);



  const [selectedAddress, setSelectedAddress] = useState(null);



  const handleAddressSelect = (id) => {
    setSelectedAddress(id);
    // Additional logic for selected address can be added here
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

      <br />
      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <h3 className="text-center">Select Address</h3>
              <div>
                <AddressList addresses={addresses} onAddressSelect={handleAddressSelect} selectedAddressId={selectedAddressId} setSelectedAddressId={setSelectedAddressId} />
              </div>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-9"></div>
            <div className="col-3">
              <div className="card">
                <div className="form-control text-center">
                  <PaymentApi selectedAddressId={selectedAddressId} />
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <br />

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default CheckoutPage;
