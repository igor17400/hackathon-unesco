import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import classes from "./Dashboard.module.css";
import LineGraph from "../Graphs/LineGraph";
import {
  tentativafeminicidio2017,
  feminicidio2017,
  tentativafeminicidio2018,
  feminicidio2018,
  tentativafeminicidio2019,
  feminicidio2019,
  tentativafeminicidio2020,
  feminicidio2020,
  yearLabels,
} from "./mockData";

function YearRender(props) {
  const year = props.year;
  if (year === "2017") {
    return <h1>2017</h1>;
  }

  if (year === "2018") {
    return <h1>2018</h1>;
  }

  if (year === "2019") {
    return <h1>2019</h1>;
  }

  return <h1>2020</h1>;
}

export default class Dashboard extends Component {
  state = {
    data1: tentativafeminicidio2017,
    data2: feminicidio2017,
    labels: yearLabels,
    year: "2017",
  };

  handleButtonClickYear = (e) => {
    const { value } = e.target;
    const newYear = value;
    const is2017 = value === "2017";
    const is2018 = value === "2018";
    const is2019 = value === "2019";
    const is2020 = value === "2020";

    const newData1 = is2017
      ? tentativafeminicidio2017
      : is2018
      ? tentativafeminicidio2018
      : is2019
      ? tentativafeminicidio2019
      : tentativafeminicidio2020;

    const newData2 = is2017
      ? feminicidio2017
      : is2018
      ? feminicidio2018
      : is2019
      ? feminicidio2019
      : feminicidio2020;

    this.setState({
      data1: newData1,
      data2: newData2,
      year: newYear,
    });
  };

  render() {
    const { data1, data2, labels, year } = this.state;
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
                <Button
                  value="2017"
                  variant="dark"
                  onClick={this.handleButtonClickYear}
                >
                  2017
                </Button>{" "}
                <Button
                  value="2018"
                  variant="dark"
                  onClick={this.handleButtonClickYear}
                >
                  2018
                </Button>{" "}
                <Button
                  value="2019"
                  variant="dark"
                  onClick={this.handleButtonClickYear}
                >
                  2019
                </Button>{" "}
                <Button
                  value="2020"
                  variant="dark"
                  onClick={this.handleButtonClickYear}
                >
                  2020
                </Button>{" "}
                <div className={classes.container}>
                  <YearRender year={year} />
                  <br></br>
                  <LineGraph data1={data1} data2={data2} labels={labels} />
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
