import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalRectSeries
} from "react-vis";

import "./Statistics.css";

const timestamp = new Date("May 23 2017").getTime();
const ONE_DAY = 86400000;
const DATA = [
  { x0: ONE_DAY * 2, x: ONE_DAY * 3, y: 1 },
  { x0: ONE_DAY * 7, x: ONE_DAY * 8, y: 1 },
  { x0: ONE_DAY * 8, x: ONE_DAY * 9, y: 1 },
  { x0: ONE_DAY * 9, x: ONE_DAY * 10, y: 2 },
  { x0: ONE_DAY * 10, x: ONE_DAY * 11, y: 2.2 },
  { x0: ONE_DAY * 19, x: ONE_DAY * 20, y: 1 },
  { x0: ONE_DAY * 20, x: ONE_DAY * 21, y: 2.5 },
  { x0: ONE_DAY * 21, x: ONE_DAY * 24, y: 1 },
].map((el) => ({ x0: el.x0 + timestamp, x: el.x + timestamp, y: el.y }));

class Statistics extends Component {
  render() {
    return (
      <div>
        <Container fluid bg="dark">
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-box2">
                <Container>
                  <h2 className="text-pink">
                    The amount of domestic violence per month
                  </h2>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2017</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2018</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2019</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2020</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid bg="dark">
          <Row>
            <Col>
              <Jumbotron fluid className="jumbotron-box2">
                <Container>
                  <h2 className="text-pink">
                    The amount of domestic violence per month
                  </h2>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2017</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2018</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2019</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
                </div>
              </div>
            </Col>
            <Col>
              <div className="jumbotron jumbotron-title">
                <div className="container">
                  <h3 className="text-azure graph-info">2020</h3>
                  <br></br>
                </div>
                <div className="container graph-config">
                  <XYPlot
                    xDomain={[
                      timestamp - 2 * ONE_DAY,
                      timestamp + 30 * ONE_DAY,
                    ]}
                    yDomain={[0.1, 2.1]}
                    xType="time"
                    width={300}
                    height={300}
                  >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalRectSeries
                      data={DATA}
                      style={{ stroke: "#fff" }}
                    />
                  </XYPlot>
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

export default Statistics;
