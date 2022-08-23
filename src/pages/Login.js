import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Login = ({ token, setToken }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [close, setClose] = useState(false); 

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3005/user/login",
        {
          email: mail,
          password: password,
        }
      );

      Cookies.set("token", response.data.token, { expires: 7 });

      setToken(Cookies.set("token", response.data.token, { expires: 7 }));
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="form container modal-bkgd">
        <button className="toggle" onClick={() => setClose(!close)}>
                 <FontAwesomeIcon icon="xmark" />
      </button> 
      <h4>Se connecter</h4>
      <div className="main-box">
             
      <form
        className="form-inputs modal-container"
        onSubmit={(event) => {
          event.preventDefault();
          fetchData();
        }}
      >
        <input
          type="mail"
          placeholder="E-mail"
          value={mail}
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {isLoading ? (
          <p>Connexion en cours</p>
        ) : (
          <button className="submit-btn">Se connecter</button>
        )}

        <Link to="/signup" className="link">
          Pas encore de compte ? Inscris-toi !
        </Link>
        {!token && (
          <p>Oups... Connectez-Vous</p>
        )}
      </form>
      </div>
      
      </div>
   
  );
};
export default Login;
