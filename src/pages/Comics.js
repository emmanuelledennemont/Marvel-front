import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = ({ title, setTitle,page, setPage, limit, setLimit, favoriteComics, setFavoriteComics }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/comics?title=${title ? title : ""}&limit=${limit}&page=${page}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [title, limit, page]);
  const comicsArray = data.comics;
  console.log(data)
  console.log(data.numberOfPages)
  return (
    <>
      <div className="principal-title">
        <h1>Comics</h1>
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
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>

              <div className="featured-article featured-article-1">
                <div className="older-posts section">
                  <div>
                    <div className="container grey-section">
                      <h2 className="section-title" data-name="All comics">
                        All comics
                      </h2>

                      <div className="older-posts-grid-wrapper d-grid">
                        {comicsArray?.map((element, index) => {
                          return (
                            <div className="article d-grid" key={index}>
                              {element.picture && (
                                <div className="older-posts-article-image-wrapper">
                                  <img
                                    src={element.picture}
                                    alt="comics marvel"
                                    className="article-image"
                                  />
                                  <button
                                    className="btn btn-image"
                                    type="submit"
                                    onClick={() => {
                                      let copyFavoriteComics= [
                                        ...favoriteComics
                                      ];
                                      copyFavoriteComics.push(element);
                                      setFavoriteComics(copyFavoriteComics);
                                    }}
                                  >
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                  </button>
                                </div>
                              )}

                              <div className="article-data-container">
                                {element.title && (
                                  <h3 className="title article-title">
                                    {element.title}
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

export default Comics;
