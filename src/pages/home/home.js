import { Col, Row } from "react-bootstrap";
import FilterCategories from "../../components/shop/filter/filter";
import ItemListContainer from "../../components/shop/items/ItemList/ItemListContainer";
function Main() {
  return (
    <main>
      <section className="bannerLanding">
        <h1>La muralla de Trost abrio sus puertas...</h1>
        <p>
          Ahora podras encontrar todas las prendas de Anime y accesorios. No
          desaproveches la oportunidad de matar titanes cuando los veas 😉
        </p>
      </section>
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
