import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import Cookies from "js-cookie";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faSearch,
  faHeart,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark, faSearch, faHeart, faSun, faMoon);
function App() {

  const [token, setToken] = useState(Cookies.get("token") || null);
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/personnages" element={<Characters />} />
            <Route path="/comics" element={<Comics />} />

            <Route />

            <Route
              path="/signup"
              element={
                <Signup
                  token={token}
                  setToken={setToken}
                />
              }
            />

            <Route
              path="/login"
              element={
                <Login
                  token={token}
                  setToken={setToken}
                />
              }
              />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
