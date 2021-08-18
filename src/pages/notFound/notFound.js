import "./notFound.scss";
import test from "../../assets/not-found.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main id="notFound">
      <img src={test} alt="L mirando fijamente tu alma" id="LImg" />
      <h1>Em.. Esto es embarazoso</h1>
      <p>
        No logramos encontrar la pagina que buscabas, te invitamos a volver al
        inicio.
      </p>
      <Link to="/" id="backHome">
        Volvamos a la normalidad 😁
      </Link>
    </main>
  );
}

export default NotFound;
