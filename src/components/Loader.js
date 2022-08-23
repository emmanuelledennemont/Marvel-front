import iron from "../images/iron.gif";

const Loader = () => {
  return (
    <>
      <div className="bckg-color-loader">
        <img src={iron} alt="" />
        <p>En chargement ...</p>
      </div>
    </>
  );
};

export default Loader;
