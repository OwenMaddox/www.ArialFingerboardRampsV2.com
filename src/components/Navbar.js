import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark
     bg-body-tertiary"
    >
      <div className="container-fluid">
        <img src={logo} alt="logo" className="img" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <h1 className="nav-link active " aria-current="page">
                <Link className="link" to="/">
                  Home
                </Link>
              </h1>
            </li>

            <li className="nav-item ">
              <h1 className="nav-link active " aria-current="page">
                <Link className="link" to="/Catalog/">
                  Catalog
                </Link>
              </h1>
            </li>

            {/* 
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </div>
              <ul class="dropdown-menu">
                <li>
                  <div>ksdjlf</div>
                </li>
                <li>
                  <div>sjlk</div>
                </li>
                <li>
                  <div>sjks</div>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
