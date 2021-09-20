import "./loading.scss";

// Import de imagenes
import sasuke from "../../assets/loading.jpg";

const Loading = () => {
  return (
    <div className="loader">
      <img
        src={sasuke}
        alt="Sasuke pensando si mostrarte o no los productos"
        className="loaderImg"
      />
      <h2 className="loaderText">Sasuke esta pensando...</h2>
    </div>
  );
};

export default Loading;
