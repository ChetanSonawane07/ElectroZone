import { useState, useEffect } from "react";
import logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar({ onBecomeSeller, onUserLogin, onNavigateToAboutUs, setActiveComponent }) {
  const [permission, setPermission] = useState(false);
  const navigate = useNavigate()
  const onHome = () => {
    navigate('/')
  }

  useEffect(() => {
    if (sessionStorage.getItem('id') && sessionStorage.getItem('id').length > 0) {
      setPermission(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img src={logo} height="35" alt="Logo" onClick={onHome} />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <form className="d-flex input-group w-auto">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button
                  className="btn"
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
        </div>
        <span
          className="nav-link text-white fw-bold btn"
          onClick={onNavigateToAboutUs}
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          About Us
        </span>

        <button className="btn btn-outline-success" style={{ marginRight: 20 }} onClick={onBecomeSeller}>
          Become a seller
        </button>

        <div className="d-flex align-items-center">
          <button
            className="text-reset me-3 border-none btn"
            onClick={permission ? () => setActiveComponent("My-Cart") : onUserLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bag-heart-fill"
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
                alt="Avatar"
                loading="lazy"
              />
            </a>

            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <li>
                <button className="dropdown-item" onClick={onUserLogin}>
                  Login
                </button>
              </li>
              {permission && (
                <>
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
                      onClick={() => {
                        sessionStorage.removeItem('id');
                        setActiveComponent("Home");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
