import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userEvent from "@testing-library/user-event";

const Characters = ({
  name,
  setName,
  page,
  setPage,
  limit,
  setLimit,
  favoriteCharacters,
  setFavoriteCharacters,
}) => {
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

  const onChangeHandler= (text) => {
    let matches =[]
    if (name.length > 0) {
      matches= charactersDataArray.filter(usr =>{
        const regex = new RegExp (`${name}`, "gi")
        return charactersDataArray.match(regex)
        
      })
     
    }
    
  }
 

  const charactersDataArray = data.characters;
  const totalPages = data.numberOfPages;
  
  //const pages = Math.ceil(charactersDataArray / totalPages);
 // const newLimit = Array.from({ length : totalPages },(_, index)=>{
  //  const start = index * totalPages
    //return charactersDataArray.slice(start, start + totalPages)
 //})//
 
  console.log(totalPages)
//console.log(charactersDataArray);
//console.log()
//console.log(newLimit)
  
  const handlePage = (index) => {
    setPage(index);
  };

  const next =()=>{
    setPage((page)=>{
      let next = page + 1;
      if(next > charactersDataArray - 100){
        next = 0   
      }
      return next
    })
  }
  const prev =()=>{
    setPage((page)=>{
      let prev = page - 1;
      if(prev < 0){
        prev = charactersDataArray - 100
      }
      return prev
    })
  }
  
 


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
                            <div>
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
                            </div>
                          );
                        })}
                      </div>
                      <div className="btn-container">
                        <button className="prev-btn" onClick={prev} >prev</button>
                        {charactersDataArray?.map((element,index)=>{
                          return(
                            <>
                            <button key={index} className="page-btn" onClick={()=>handlePage(index)}>
                              {page+1}
                            </button>
                            </>
                          )
                        })}
                         <button className="prev-btn" onClick={next}>next</button>
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
