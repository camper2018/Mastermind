import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container fluid="sm">
      <div className="game_container">
        <Row className="row_title">
          <Col
            xs={{ span: 6, order: 2 }}
            sm={{ span: 6, order: 2 }}
            md={{ span: 2, order: 1 }}
            className="d-flex flex-row justify-content-center align-items-center mt-3"
          >
            <h6 className="side_heading">
              Difficulty: <span className="side_heading_span">Medium</span>
            </h6>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 8, order: 2 }}
          >
            <div className="header">
              <h1 className="text-center">MASTERMIND</h1>
            </div>
          </Col>
          <Col
            xs={{ span: 6, order: 3 }}
            sm={{ span: 6, order: 3 }}
            md={{ span: 2, order: 3 }}
            className="d-flex flex-row justify-content-center align-items-center mt-3"
          >
            <h6 className="side_heading">
              Time Left: <span className="side_heading_span">1000</span>
            </h6>
          </Col>
        </Row>
        <div className="rows_container">
          <Row className="row">
            <Col lg md="6" xs="12" className="col"></Col>
            <Col lg md="6" xs="12" className="col"></Col>
          </Row>
          <Row className="row">
            <Col lg md="6" xs="12 " className="col"></Col>
            <Col lg md="6" xs="12" className="col"></Col>
          </Row>
          <Row className="row">
            <Col lg md="6" xs="12" className="col"></Col>
            <Col lg md="6" xs="12" className="col"></Col>
          </Row>
          <Row className="row">
            <Col lg md="6" xs="12" className="col"></Col>
            <Col lg md="6" xs="12" className="col"></Col>
          </Row>
          <Row className="row">
            <Col lg md="6" xs="12" className="col"></Col>
            <Col lg md="6" xs="12" className="col"></Col>
          </Row>
          <Row className="btns_row">
            <Col md={8} xs={12} className="input_btns_container"></Col>
            <Col md={4} xs={12} className="hint_btn_container">
              <Button size="lg" className="hint_btn">
                HINT
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default App;
