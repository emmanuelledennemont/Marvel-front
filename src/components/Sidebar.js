import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Sidebar = (show, setShow, token , setToken) => {
  const navigate = useNavigate();
return(
    <>
    <div className="modal-container" onClick={() => {
        setShow(false);
      }}>
   <div
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <nav className="sidebar">
        
          <div className="menu-sidebar" >
            <ul className="list-sidebar">
              <Link to="/" className="list-item-sidebar">
                Personnages
              </Link>
              <Link to="/comics" className="list-item-sidebar">
                Comics
              </Link>
              <Link to="/favorites" className="list-item-sidebar">
                Favoris
              </Link>
            </ul>
          </div>

          <div className="btn-grp">
        
          
            {!token ? (
              <>
                <div className="list-link screen-sm-sidebar">
                  <Link to="/signup">Sign in</Link>
                </div>
                <div className="btn  screen-sm-sidebar">
                  <Link to="/login">
                    <span>Sign up</span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="btn  screen-sm-sidebar">
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

      </div>
    </div>
    </>
)
  
};

export default Sidebar;
