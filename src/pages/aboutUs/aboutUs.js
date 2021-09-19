import "./aboutUs.scss";
import logo from "../../assets/wall-rose.png";
import kira from "../../assets/light.webp";
import saitama from "../../assets/saitama.webp";
import titans from "../../assets/erenVSreiner.webp";
import gojo from "../../assets/gojo.gif";
import tanjiro from "../../assets/tanjiro.gif";
import naruto from "../../assets/naruto.webp";

function AboutUs() {
  return (
    <main className="aboutUs">
      <div className="logoMobile">
        <img src={logo} alt="Logo del comercio" />
      </div>
      <div className="gifs">
        <div className="fullPageGif">
          <img src={kira} alt="Gif de Death Note" />
          <img src={saitama} alt="Gif de One Punch Man" />
        </div>
        <img src={titans} alt="Gif de Attack on Titan" />
      </div>
      <div className="display">
        <div className="usText">
          <h1>¿Quienes somos?</h1>
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
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YT6cguwIJTU?start=180"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div className="gifs">
        <img src={gojo} alt="Gif de Jujutsu Kaisen" />

        <div className="fullPageGif">
          <img src={naruto} alt="Gif de Naruto" />
          <img src={tanjiro} alt="Gif de Kimetsu No Yaiba" />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
