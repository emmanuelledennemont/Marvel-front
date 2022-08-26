import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = ({
  name,
  setName,
  page,
  setPage,
  limit,
  favoriteCharacters,
  setFavoriteCharacters,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-bck.herokuapp.com/characters?name=${
            name ? name : ""
          }&limit=${limit}&page=${page}
           `
        );
      
        setData(response.data);
        if (response.data < 100) {
          setPage(0);
        }
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
      
    };

    fetchData();
  

  }, [name, page, limit, setPage]);


  const onSearch = (searchTerm) => {
    setName(searchTerm);
  };

  const charactersDataArray = data.characters;

  const next = () => {
    setPage((page) => {
      let next = page + 1;
      if (next > charactersDataArray - 100) {
        next = 0;
      }
      return next;
    });
  };
  const prev = () => {
    setPage((page) => {
      let prev = page - 1;
      if (prev < 0) {
        prev = charactersDataArray - 100;
        prev = 1;
      }
      return prev;
    });
  };

  return (
    <>
      <div className="principal-title">
        <h1>Characters</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        
        <div className="featured-articles section section-header-offset">
               <div className="dropdown ">
                    {charactersDataArray
                      ?.filter((charactersDataArray) => {
                        const searchTerm = name.toLowerCase();
                        const fullName = charactersDataArray.name.toLowerCase();
                        return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                      }).slice(0, 15)
                      .map((element) => (
                        <div className="dropdown-row" key={element.name} onClick={()=>onSearch(element.name)}>
                          {element.name}
                        </div>
                      ))}
                  </div>
          <div className="featured-articles-container container d-grid">
            <div className="featured-content d-grid">
       
              <div className="headline-banner">
                <h3
                  className="headline fancy-border"
                  onClick={() => onSearch(name)}
                >
                  <span className="place-items-center">Search</span>
                </h3>

                <div className="headline-right-banner">
                  <FontAwesomeIcon icon="search" />
                  <input
                    type="search"
                    className="headline-description"
                    placeholder="Search your favorite characters..."
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
             
                </div>
              </div>

              <div className="featured-article featured-article-1">
                <div className="older-posts section">
                  <div>
                    <div className="container grey-section">
                      <h2 className="section-title" data-name="All characters">
                        All characters
                      </h2>

                      <div className="older-posts-grid-wrapper d-grid">
                        {charactersDataArray?.map((element) => {
                          let characterId = element._id;
                          return (
                            <div className="article d-grid" key={characterId}>
                              {element.picture && (
                                <div className="older-posts-article-image-wrapper">
                                  <img
                                    src={element.picture}
                                    alt="personnages marvel"
                                    className="article-image"
                                  />
                                  <button
                                    className="btn btn-image"
                                    type="submit"
                                    onClick={() => {
                                      let copyFavoriteCharacters = [
                                        ...favoriteCharacters,
                                      ];
                                      copyFavoriteCharacters.push(element);
                                      setFavoriteCharacters(
                                        copyFavoriteCharacters
                                      );
                                    }}
                                  >
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                  </button>
                                </div>
                              )}
                              <Link
                                to={`/comics/${characterId}`}
                                className="d-grid "
                              >
                                <div className="article-data-container">
                                  {element.name && (
                                    <h3 className="title article-title">
                                      {element.name}
                                    </h3>
                                  )}
                                  {element.description ? (
                                    <p className="article-description">
                                      {element.description}
                                    </p>
                                  ) : (
                                    <p className="article-description">
                                      Discription bientôt disponible pour ce
                                      personnage
                                    </p>
                                  )}
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                      <div className="btn-container">
                        <button className="prev-btn" onClick={prev}>
                          prev
                        </button>
                        <button className="page-btn">{1} ...</button>
                        <button className="page-btn">{page + 1} ...</button>
                        <button className="page-btn">{100}</button>
                        <button className="prev-btn" onClick={next}>
                          next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Characters;
