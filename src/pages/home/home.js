import FilterCategories from "../../components/shop/filter/filter";
import ItemListContainer from "../../components/shop/items/ItemList/ItemListContainer";
import "./body.scss";
import test from "../../assets/test.png";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function Main() {
  const cart = useContext(CartContext);
  console.log("cart", cart);
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
          <Container>
            <ItemListContainer />
          </Container>
        </div>
      </div>
    </main>
  );
}

export default Main;
