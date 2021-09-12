import "./aboutUs.scss";
import logo from "../../assets/wall-rose.png";

function AboutUs() {
  return (
    <main className="aboutUs">
      <div className="logoMobile">
        <img src={logo} />
      </div>
      <div className="gifs">
        <div className="fullPageGif">
          <img
            src="https://media3.giphy.com/media/YmZOBDYBcmWK4/giphy.gif?cid=ecf05e47shp3u8zzmhsr8t73pep9jue364eron0ek4j74ord&rid=giphy.gif&ct=g"
            alt="Gif de Death Note"
          />
          <img
            src="https://media1.giphy.com/media/AcZq2mahIezYY/giphy.gif?cid=ecf05e47b41jfbz8x7wi7c54e7v47yjf67a0vuh1s1mrbvya&rid=giphy.gif&ct=g"
            alt="Gif de One Punch Man"
          />
        </div>
        <img
          src="https://media1.giphy.com/media/3o7bu6m6ZHinKHonQs/giphy.gif?cid=ecf05e47w2vye6c7nxd7ulqrsq36lib2kh42bp6o88bz790u&rid=giphy.gif&ct=g"
          alt="Gif de Attack on Titan"
        />
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
        <img
          src="https://media2.giphy.com/media/JRlqKEzTDKci5JPcaL/giphy.gif?cid=ecf05e47uhq12bobvgt9juz4eb06knfisirr5eozj490byr3&rid=giphy.gif&ct=g"
          alt="Gif de Naruto"
        />
        <div className="fullPageGif">
          <img
            src="https://c.tenor.com/tuMRVPb3AFIAAAAC/jujutsu-kaisen-gojo-satoru.gif"
            alt="Gif de Jujutsu Kaisen"
          />
          <img
            src="https://c.tenor.com/fyuzbGg7kSkAAAAC/tanjiro-j8.gif"
            alt="Gif de Kimetsu No Yaiba"
          />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
