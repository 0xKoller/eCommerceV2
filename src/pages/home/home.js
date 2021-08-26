import FilterCategories from "../../components/shop/filter/filter";
import ItemListContainer from "../../components/shop/items/ItemList/ItemListContainer";
import "./body.scss";
import test from "../../assets/test.png";

function Main() {
  return (
    <main>
      <div id="landingContainer">
        <img src={test} id="landingImg" alt="Mikasa vs Reiner" />
        <div className="bottom-left">
          <h1>La muralla de Trost abrio sus puertas...</h1>
          <h5 className="welcome">
            Ahora podras encontrar todas las prendas de Anime y accesorios. No
            desaproveches la oportunidad de matar titanes cuando los veas 😉
          </h5>
        </div>
      </div>
      <div id="gridShop">
        <div className="filters">
          <FilterCategories />
        </div>
        <div className="items">
          <ItemListContainer />
        </div>
      </div>
    </main>
  );
}

export default Main;
