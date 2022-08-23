import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = ({ name, setName, page, setPage, limit, setLimit }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/characters?name=${
            name ? name : ""
          }&limit=${limit}&page=${page}
           `
        );
        setData(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [name, page, limit]);

  const charactersDataArray = data.characters;

  return (
    <>
      <div className="principal-title">
        <h1>Characters</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="featured-articles section section-header-offset">
          <div className="featured-articles-container container d-grid">
            <div className="featured-content d-grid">
              <div className="headline-banner">
                <h3 className="headline fancy-border">
                  <span className="place-items-center">Search</span>
                </h3>
                <div className="headline-right-banner">
                  <FontAwesomeIcon icon="search" />
                  <input
                    type="search"
                    className="headline-description"
                    placeholder="Search your favorite characters..."
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
                            <div className="article d-grid">
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
                                  >
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                  </button>
                                </div>
                              )}
                              <Link
                                to={`/comics/${characterId}`}
                                className="d-grid "
                                key={characterId}
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
