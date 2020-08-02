import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import "../styles/CircleStyles.css";

class Circle extends Component {
  render() {
    return (
      <Container>
        <Row
          style={{
            width: "100%",
            backgroundColor: "blue",
            justifyContent: "center",
          }}
        >
          <h2 className="circle">24 HOURS FREE TRIAL!!</h2>
        </Row>
      </Container>
    );
  }
}

export default Circle;
