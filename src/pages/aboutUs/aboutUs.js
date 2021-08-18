import { Col, Row } from "react-bootstrap";
import "./aboutUs.scss";

function AboutUs() {
  return (
    <main id="aboutUs">
      <h1>¿Quienes somos?</h1>
      <Row>
        <Col id="usText">
          <p>
            {" "}
            Nos conocimos en la secundaria, empezamos siendo amigos sin saber
            que todos guardabamos en secreto una pasion por el Anime. Cuando
            estabamos el ultimo año, a uno de nosotros se le escapo el secreto,
            y ahi todo florecio, no podiamos creer que compartiamos semejante
            pasion y por casi los mismos animes.
          </p>
          <p>
            {" "}
            Luego de varios años, logramos empezar con este sueño que no es solo
            nuestro sino de muchas otras personas que buscan cosas respecto al
            tema y no encuentran.
          </p>
          <p className="text-muted">
            Aca te dejamos una de nuestras escenas favoritas del mundo del
            Anime. ¡Larga vida al Comandante Erwin!
          </p>
        </Col>
        <Col id="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/YT6cguwIJTU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </main>
  );
}

export default AboutUs;
