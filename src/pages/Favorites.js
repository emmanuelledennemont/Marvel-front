const Favorites = ({
    favoriteCharacters,
  setFavoriteCharacters,
  favoriteComics, setFavoriteComics 
}) => {
  
  return (
    <div>
      <section className="favorite-comics">
            
      {favoriteComics.map((element) => {
          return (
            <div>
              <div>{element.name}</div>
              <div>
                <img src={element.picture} alt="representation du Comics" />
              </div>
              <div>{element.description}</div>
            </div>
          );
        })}
     
      </section>
      <section className="favorite-characters">
       
        {favoriteCharacters.map((element) => {
          return (
            <div>
              <div>{element.name}</div>
              <div>
                <img src={element.picture} alt="representation du Comics" />
              </div>
              <div>{element.description}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Favorites;