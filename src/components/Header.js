import logo from "../images/marvelred.png";
import bd from "../images/bd.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({ token, setToken }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="nav-color"></div>
        <nav className="navbar container">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <div className="menu" id="menu">
            <ul className="list list-gap">
              <Link to="/" className="list-item">
                Personnages
              </Link>
              <Link to="/comics" className="list-item">
                Comics
              </Link>
              <Link to="/favorites" className="list-item">
                Favoris
              </Link>
            </ul>
          </div>

          <div className="list list-right">
            <Link
              to="/favorites"
              className="btn place-items-center screen-sm-hidden"
            >
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </Link>
            
            {show && <Sidebar show={show} setShow={setShow} />}
            <button
              className="btn place-items-center screen-lg-hidden menu-toggle-icon"
              onClick={() => setShow(!show)}
            >
               {show ? (
                <FontAwesomeIcon icon="xmark" className="open-menu-icon" />
              ) : (
                <FontAwesomeIcon icon="bars" className="open-menu-icon" />
              )}
            </button>
            {!token ? (
              <>
                <div className="list-link screen-sm-hidden">
                  <Link to="/signup">Sign in</Link>
                </div>
                <div className="btn sign-up-btn fancy-border screen-sm-hidden">
                  <Link to="/login">
                    <span>Sign up</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="btn sign-up-btn fancy-border screen-sm-hidden">
                <Link
                  to="/"
                  onClick={() => {
                    Cookies.remove("token");
                    setToken(null);
                    navigate("/login");
                  }}
                >
                  <span>Sign out</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
        <img src={bd} alt="bulle comics" className="logo-bd" />
      </header>
    </>
  );
};

export default Header;
