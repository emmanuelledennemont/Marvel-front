import "./App.css";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import ComicBookCharacters from "./pages/ComicBookCharacters";
import Favorites from "./pages/Favorites";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
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
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const [token, setToken] = useState(Cookies.get("token") || null);
  return (

    <>
      <div className="App">

        
        <Router>
          <Header
            token={token}
            setToken={setToken}
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Characters
                  name={name}
                  setName={setName}
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  setLimit={setLimit}
                  favoriteCharacters={favoriteCharacters}
                  setFavoriteCharacters={setFavoriteCharacters}
                />
              }
            />
            <Route
              path="/comics"
              element={
                <Comics
                  title={title}
                  setTitle={setTitle}
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  setLimit={setLimit}
                  favoriteComics={favoriteComics}
                  setFavoriteComics={setFavoriteComics}
                />
              }
            />

            <Route
              path="/comics/:characterId"
              element={<ComicBookCharacters />}
            />

            <Route
              path="/favorites"
              element={
                <Favorites
                  favoriteCharacters={favoriteCharacters}
                  setFavoriteCharacters={setFavoriteCharacters}
                  favoriteComics={favoriteComics}
                  setFavoriteComics={setFavoriteComics}
                />
              }
            />

            <Route
              path="/signup"
              element={<Signup token={token} setToken={setToken} />}
            />

            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
