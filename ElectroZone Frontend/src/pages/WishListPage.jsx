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

initMDB({ Dropdown, Collapse });
function WishListPage() {
  const [activeComponent, setActiveComponent] = useState("Home");
  const navigate = useNavigate();
  const BecomeSeller = () => {
    navigate("/Seller-Register");
  };
  const UserLogin = () => {
    navigate("/User-Login");
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
        return navigate("/WishList");
      case "My-Cart":
        return navigate("/Cart");
      case "View-Orders":
        return navigate("/Orders");
    }
  };
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src={logo} height="35" alt="Logo" />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button
                    className="btn "
                    type="submit"
                    style={{ marginLeft: 5, backgroundColor: "green" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </form>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          <button
            className="btn btn-outline-success"
            style={{ marginRight: 20 }}
            onClick={BecomeSeller}
          >
            Become a seller
          </button>

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <button
              className="text-reset me-3 border-none btn"
              onClick={() => setActiveComponent("My-Cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-bag-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
            </button>

            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuAvatar"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <button className="dropdown-item" onClick={UserLogin}>
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("Edit-Profile")}
                  >
                    Edit profile
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("Add-Address")}
                  >
                    Add Address
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("My-WishList")}
                  >
                    My Wishlist
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("My-Cart")}
                  >
                    My Cart
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("View-Orders")}
                  >
                    View Orders
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setActiveComponent("Home")}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>

    
      <WishList />

      {/* Footer */}
      <footer className="text-center text-lg-start bg-dark text-white">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Connect With Us
                </h6>
                <div>
                  <input
                    type="text"
                    className="email"
                    placeholder="Enter Email ID"
                  />
                </div>
                <div
                  className="social-media-list"
                  style={{ marginTop: 50, display: "flex", columnGap: 20 }}
                >
                  <div className="social-media youtube">
                    <a href="#" className="text-reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-media facebook">
                    <a href="#" className="text-reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-media whatsapp">
                    <a href="#" className="text-reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-media instagram">
                    <a href="#" className="text-reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </div>
                  <div className="social-media twitter">
                    <a href="#" className="text-reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Smart Phones
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laptops
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    TVs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Wearables
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Washing Machines
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Dish Washers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Air Conditioners
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Brands</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Apple
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Samsung
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sony
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    LG
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Xiaomi
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    OnePlus
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Whirlpool
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-justify">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  Sunbeam InfoTech,
                  <br />
                  Pune-411057 MH
                </p>
                <p>electrozone@Sunbeam.com</p>
                <p>+ 91 234 567 8800</p>
                <p>+ 91 234 567 8900</p>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.297463937557!2d73.70390532247107!3d18.58986868661191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb7d0345f01f%3A0x6e8c20c647a06f47!2sSunbeam%20Infotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716818773924!5m2!1sen!2sin"
                    title="Sunbeam Map"
                    width="200"
                    height="200"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4" style={{ backgroundColor: "black" }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="localhost:3000">
            ElectroZone
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default WishListPage;
