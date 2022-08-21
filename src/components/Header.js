import logo from "../images/marvelred.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar container">
          <Link to="/personnages">
            <img src={logo} alt="" class="logo" />
          </Link>
          <div class="menu" id="menu">
            <ul class="list">
              <Link to="/personnages" className="list-item">
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

          <div class="list list-right">
            <button class="btn place-items-center" id="theme-toggle-btn">
              <FontAwesomeIcon icon="fa-solid fa-sun-bright" />
              <FontAwesomeIcon icon="fa-solid fa-moon" />
            </button>

            <button
              class="btn place-items-center screen-sm-hidden"
              id="search-icon"
            >
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </button>

            <button
              class="btn place-items-center screen-lg-hidden menu-toggle-icon"
              id="menu-toggle-icon"
            >
              <FontAwesomeIcon icon="xmark" className="close-menu-icon" />

              <FontAwesomeIcon icon="bars" className="open-menu-icon" />
            </button>

            <Link to="/signup" className="list-link screen-sm-hidden">
              Sign in
            </Link>

            <div className="btn sign-up-btn fancy-border screen-sm-hidden">
              <Link to="/login">
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
