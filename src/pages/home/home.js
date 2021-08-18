import { Col, Row, Container } from "react-bootstrap";
import FilterCategories from "../../components/shop/filter/filter";
import ItemListContainer from "../../components/shop/items/ItemList/ItemListContainer";
import "./body.scss";
import test from "../../assets/test.png";

function Main() {
  return (
    <main>
      <div id="landing">
        <h1>La muralla de Trost abrio sus puertas...</h1>
        <p>
          Ahora podras encontrar todas las prendas de Anime y accesorios. No
          desaproveches la oportunidad de matar titanes cuando los veas 😉
        </p>
      </div>
      <div className="productBody">
        <Row>
          <Col className="col-4">
            <FilterCategories />
          </Col>
          <div className="col">
            <ItemListContainer />
          </div>
        </Row>
      </div>
    </main>
  );
}

export default Main;
