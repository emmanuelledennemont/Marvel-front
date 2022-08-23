import logo from "../images/marvelred.png";
import bd from "../images/bd.png";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({ token, setToken }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
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
              <Link to="/favoris" className="list-item">
                Favoris
              </Link>
            </ul>
          </div>

          <div className="list list-right">
            <Link
              to="/favoris"
              className="btn place-items-center screen-sm-hidden"
            >
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </Link>

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
                  to="/characters"
                  onClick={() => {
                    setToken(null);
                    Cookies.remove("token");
                    Navigate("/login");
                  }}
                >
                  <span>Sign out</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
        <img src={bd} alt="" className="logo-bd" />
      </header>

    </>
  );
};

export default Header;
