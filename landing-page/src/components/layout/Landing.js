import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "./Landing.css";

import pedhua_mainPage from "../../img/pedhua_mainPage.png";
import cellphone from "../../img/Mobile.png";
import meghan from "../../img/meghan.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        <Container fluid bg="light">
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-title">
                <div className="container container-title">
                  <h1 className="display-4">Pedhua</h1>
                  <p className="lead">Our goal is to reduce domestic abuse.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid>
                <Container>
                  <Row>
                    <Col>
                      <h1 className="text-dark">Protect yourself.</h1>
                      <p className="text-pink">Download our app.</p>
                    </Col>
                    <Col>
                      <img
                        alt=""
                        src={cellphone}
                        width="450"
                        height="450"
                        className="d-inline-block"
                      />{" "}
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid className="size-jumbotron jumbotron-cover-image">
                <Container>
                  <Row>
                    <Col></Col>
                    <Col xs={6}></Col>
                    <Col>
                      <h1 className="text-dark">
                        Recreating <span className="text-pink">Woman</span>{" "}
                        security
                      </h1>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid className="size-jumbotron jumbotron-cover-image2">
                <Container>
                  <Row>
                    <Col>
                      {" "}
                      <h2 className="text-dark">
                        Generating <span className="text-pink">data</span>{" "}
                        to fight domestic violence
                      </h2>
                    </Col>
                    <Col xs={6}></Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-title">
                <div className="container container-title">
                  <h1 className="display-4">Join us.</h1>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <p>Pedhua</p>
              <small className="d-block mb-3 text-muted">© 2020-2021</small>
            </div>

            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Our team
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Location
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Contact Us</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Github
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Download</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Apple store
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Android store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Landing;
