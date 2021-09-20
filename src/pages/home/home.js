import ItemListContainer from "../../components/shop/items/ItemList/ItemListContainer";
import "./body.scss";

// Import de imagenes
import landingImg from "../../assets/test.png";

function Main() {
  return (
    <main>
      <div id="landingContainer">
        <img src={landingImg} id="landingImg" alt="Mikasa vs Reiner" />
        <div className="bottom-left">
          <h1>La muralla de Trost abrio sus puertas...</h1>
          <h5 className="welcome">
            Ahora podras encontrar todas las prendas de Anime y accesorios. No
            desaproveches la oportunidad de matar titanes cuando los veas 😉
          </h5>
        </div>
      </div>
      <div className="items">
        <ItemListContainer />
      </div>
    </main>
  );
}

export default Main;
