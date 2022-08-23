import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicBookCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/comics/${characterId}`
        );
        
        setData(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [characterId]);
  const comicBookCharactersArray = data.arrayOfComics;
  const  nameCharacter = data.character_name;
  return (
    <>
      <div className="principal-title">
        <h1>Characters in comics</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="featured-articles section section-header-offset">
          <div className="featured-articles-container container d-grid">
            <div className="featured-content d-grid">
              <div className="featured-article featured-article-1">
                <div className="older-posts section">
                  <div>
                    <div className="container grey-section">
                      <h2 className="section-title" data-name="The characters in the comics">
                        The characters in the comics
                      </h2>

                      <div className="d-grid container older-posts-article-image-wrapper characters-img">
                        <img
                          src={data.principalCharacterPicture}
                          alt="personnage marvel"
                        />
                        <p className="name">{nameCharacter}</p>
                      </div>
                      <div className="older-posts-grid-wrapper d-grid">
                        {comicBookCharactersArray.map((element) => {
                          return (
                            <div className="article d-grid">
                              {element.picture && (
                                <div className="older-posts-article-image-wrapper">
                                  <img
                                    src={element.picture}
                                    alt="comics marvel"
                                    className="article-image"
                                  />
                                  <button
                                    className="btn btn-image screen-sm-hidden"
                                    type="submit"
                                  >
                                    <FontAwesomeIcon icon="fa-solid fa-heart" />
                                  </button>
                                </div>
                              )}

                              <div className="article-data-container">
                                {element.title && (
                                  <h3 className="title article-title" >
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
                                    Comics
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

export default ComicBookCharacters;
