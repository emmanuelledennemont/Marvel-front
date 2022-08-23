import logo from "../images/marvelred.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <>
       <footer className="footer section">

<div className="footer-container container d-grid">
    
    <div className="company-data">
    <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
        <p className="company-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.</p>
    </div>

</div>
<div className="copyright">
<span className="copyright-notice">&copy;2022 marvel app, at le reacteur technical test. </span>
</div>
</footer>

      </>
    );
  };
  
  export default Footer;
  