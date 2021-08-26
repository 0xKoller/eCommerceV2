import image from "../../assets/loading.jpg";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loader">
      <img src={image} alt="#" className="loaderImg" />
      <h2 className="loaderText">Sasuke esta pensando...</h2>
    </div>
  );
};

export default Loading;
