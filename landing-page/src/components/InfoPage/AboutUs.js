import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import "./AboutUs.css";
import igor_image from "../../img/igor_image.png";
import ceci_image from "../../img/ceci_image.png";
import sernegio_image from "../../img/sernegio_image.png";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container fluid bg="light">
          <Row>
            <Col>
              <div className="jumbotron jumbotron-fluid jumbotron-title">
                <div className="container container-title">
                  <h1 className="display-4">Our team</h1>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-box2">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="text-pink">Vitória Sernégio</h1>
                      <p className="text-azure">Team member</p>
                      <p className="text-azure">Law student in Univeristy of Brasilia</p>
                      <p className="text-pink">vitoriabsernegio@gmail.com</p>
                    </Col>
                    <Col xs={3}></Col>
                    <Col>
                      <img
                        alt=""
                        src={sernegio_image}
                        width="250"
                        height="250"
                        className="d-inline-block image-config"
                      />{" "}
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-box2">
                <Container>
                  <Row>
                    <Col>
                      <img
                        alt=""
                        src={ceci_image}
                        width="250"
                        height="250"
                        className="d-inline-block image-config"
                      />{" "}
                    </Col>
                    <Col xs={3}></Col>
                    <Col>
                      <h1 className="text-pink">Cecília Cipriano</h1>
                      <p className="text-azure">Team member</p>
                      <p className="text-azure">GPP student in Univeristy of Brasilia</p>
                      <p className="text-pink">cecilia.ocipriano@gmail.com</p>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-box2">
                <Container>
                  <Row>
                    <Col>
                      <h1 className="text-pink">Igor Lima</h1>
                      <p className="text-azure">Developer</p>
                      <p className="text-azure">Electrical engineering student in Univeristy of Brasilia</p>
                      <p className="text-pink">igorlima1740@gmail.com</p>
                    </Col>
                    <Col xs={3}></Col>
                    <Col>
                      <img
                        alt=""
                        src={igor_image}
                        width="250"
                        height="250"
                        className="d-inline-block image-config"
                      />{" "}
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
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

export default AboutUs;
