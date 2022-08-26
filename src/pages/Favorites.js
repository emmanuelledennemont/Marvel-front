import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Favorites = ({
  favoriteCharacters,
  setFavoriteCharacters,
  favoriteComics,
  setFavoriteComics,
}) => {
  return (
    <div>
      <section>
        <div className="favorite-comics featured-article featured-article-1 container">
          <div className="older-posts section">
            <div>
              <div className="container grey-section">
                <h2
                  className="section-title"
                  data-name="Your All Favotite comics"
                >
                  Your All Favorite comics
                </h2>

                <div className="d-grid section">
                <Splide options={{perPage: 3, gap:"2rem", drag:"free", pagination:false, arrows:false,}}> 
                  {favoriteComics.map((element,index) => {
                     
                    return ( 
                        <div key={index}>
                        <SplideSlide>
                      <div className="article d-grid" >
                        {element.picture && (
                          <div className="older-posts-article-image-wrapper">
                            <img
                              src={element.picture}
                              alt="comics marvel"
                              className="article-image"
                            />
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
                              Discription bientôt disponible pour ce personnage
                            </p>
                          )}
                        </div>
                      </div>
                      </SplideSlide>
                      </div>
                    );
                    
                  })}
                    </Splide>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section>

       <div className="favorite-characters featured-article featured-article-1 container">
                <div className="older-posts section">
                  <div>
                    <div className="container grey-section">
                      <h2 className="section-title" data-name="Your All Favorite characters">
                       Your All Favorite characters
                      </h2>

                      <div className="d-grid section">
                      <Splide options={{perPage: 3, gap:"2rem", drag:"free", pagination:false, arrows:false,}}>  
                        {favoriteCharacters.map((element, index) => {
                         
                          return (
                              <div key={index}>
                            <SplideSlide >
                            <div>
                              <div className="article d-grid cards" >
                                {element.picture && (
                                  <div className="older-posts-article-image-wrapper">
                                    <img
                                      src={element.picture}
                                      alt="personnages marvel"
                                      className="article-image"
                                    />
                                   
                                  </div>
                                )}
                                
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
                           
                              </div>
                            </div>
                            </SplideSlide>
                            </div>
                          );
                        })}
                           </Splide>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </section>






     
    </div>
  );
};

export default Favorites;
