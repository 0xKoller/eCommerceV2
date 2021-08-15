import { Col, Container } from "react-bootstrap";
import "./filter.scss";

function FilterCategories() {
  return (
    <aside>
      <Container className="filter">
        <h4>Filter</h4>
        <hr />
        <Col className="filterContainer">
          <Container className="filterType">
            <p>Filter</p>
            <p>Filter</p>
            <p>Filter</p>
          </Container>
          <Container className="filterAnime">
            <p>Filter</p>
            <p>Filter</p>
            <p>Filter</p>
          </Container>
          <Container className="filterSlide">
            <p>Slider</p>
          </Container>
        </Col>
      </Container>
    </aside>
  );
}

export default FilterCategories;
