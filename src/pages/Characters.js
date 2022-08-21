import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Characters = () => {
  return (
    <>
      <div className="featured-articles section section-header-offset">
        <div className="featured-articles-container container d-grid">
          <div className="featured-content d-grid">
            <div className="headline-banner">
              <h3 className="headline fancy-border">
                <span clasName="place-items-center">Search</span>
              </h3>
              <div className="headline-right-banner">
                <FontAwesomeIcon icon="search" />
                <input
                  type="search"
                  className="headline-description"
                  placeholder="Search your favorite characters..."
                />
              </div>
            </div>

            <div className="article featured-article featured-article-1">
              <div className="older-posts section">
                <div>
                  <div className="container article ">
                    <h2
                      className="title section-title"
                      data-name="Older characters"
                    >
                      Older characters
                    </h2>

                    <div className="older-posts-grid-wrapper d-grid">
                      <a href="#" className="article d-grid">
                        <div class="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_1.jpg"
                            alt=""
                            className="article-image"
                          />
                        </div>

                        <div className="article-data-container">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="article d-grid">
                        <div className="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_2.jpg"
                            alt=""
                            className="article-image"
                          />
                        </div>

                        <div className="article-data-container">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="article d-grid">
                        <div className="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_3.jpg"
                            alt=""
                            className="article-image"
                          />
                        </div>

                        <div className="article-data-container .see-more-btn">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="article d-grid">
                        <div className="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_4.jpg"
                            alt=""
                            className="article-image"
                          />
                        </div>

                        <div className="article-data-container">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="article d-grid">
                        <div className="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_5.jpg"
                            alt=""
                            class="article-image"
                          />
                        </div>

                        <div className="article-data-container">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>

                      <a href="#" className="article d-grid">
                        <div className="older-posts-article-image-wrapper">
                          <img
                            src="./assets/images/older_posts/older_posts_6.jpg"
                            alt=""
                            className="article-image"
                          />
                        </div>

                        <div className="article-data-container">
                          <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                          </div>

                          <h3 className="title article-title">
                            Sample article title
                          </h3>
                          <p className="article-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Similique a tempore sapiente corporis, eaque
                            fuga placeat odit voluptatibus.
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="see-more-container">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar d-grid">
            <h3 className="title featured-content-title">Trending news</h3>

            <a href="#" className="trending-news-box">
              <div className="trending-news-img-box">
                <span className="trending-number place-items-center">01</span>
                <img
                  src="./assets/images/trending/trending_1.jpg"
                  alt=""
                  className="article-image"
                />
              </div>

              <div className="trending-news-data">
                <h3 className="title article-title">Sample article title</h3>
              </div>
            </a>

            <a href="#" className="trending-news-box">
              <div className="trending-news-img-box">
                <span className="trending-number place-items-center">02</span>
                <img
                  src="./assets/images/trending/trending_2.jpg"
                  alt=""
                  className="article-image"
                />
              </div>

              <div className="trending-news-data">
                <h3 className="title article-title">Sample article title</h3>
              </div>
            </a>

            <a href="#" className="trending-news-box">
              <div className="trending-news-img-box">
                <span className="trending-number place-items-center">03</span>
                <img
                  src="./assets/images/trending/trending_3.jpg"
                  alt=""
                  className="article-image"
                />
              </div>

              <div className="trending-news-data">
                <h3 className="title article-title">Sample article title</h3>
              </div>
            </a>

            <a href="#" className="trending-news-box">
              <div className="trending-news-img-box">
                <span className="trending-number place-items-center">04</span>
                <img src="" alt="" className="article-image" />
              </div>

              <div className="trending-news-data">
                <h3 className="title article-title">Sample article title</h3>
              </div>
            </a>

            <a href="#" className="trending-news-box">
              <div className="trending-news-img-box">
                <span className="trending-number place-items-center">05</span>
                <img src="" alt="" className="article-image" />
              </div>

              <div className="trending-news-data">
                <h3 className="title article-title">Sample article title</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
