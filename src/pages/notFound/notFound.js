import { useHistory } from "react-router";
import "./notFound.scss";

// Import de imagenes
import ryuzaki from "../../assets/not-found.png";

function NotFound() {
  const history = useHistory();
  return (
    <main id="notFound">
      <img src={ryuzaki} alt="L mirando fijamente tu alma" id="LImg" />
      <h1>Em.. Esto es embarazoso</h1>
      <p>
        No logramos encontrar la pagina que buscabas, te invitamos a volver al
        inicio.
      </p>
      <button className="goBack" onClick={() => history.goBack()}>
        ¡Volver atras!
      </button>
    </main>
  );
}

export default NotFound;
