
const Paginate = (data) => {
    const charactersDataArray = data.characters;
    const itemsPerPage = 10;
    const pages = Math.ceil(data.characters.length/ itemsPerPage);
    
    const newCharactersDataArray = Array.from({ length : pages },(_, index)=>{
      const start = index * itemsPerPage
      return charactersDataArray.slice(start, start + itemsPerPage)
    })
    console.log(newCharactersDataArray )
    return newCharactersDataArray 
  
};

export default Paginate;
