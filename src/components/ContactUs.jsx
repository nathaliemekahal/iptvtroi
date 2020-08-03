import React, { Component } from "react";
import { Container, Row, List } from "react-bootstrap";
class ContactUs extends Component {
  doubleNumbers = (arrayValues) => arrayValues.map((a) => a * 2);

  render() {
    return <>{console.log(this.doubleNumbers([1, 2, 3]))}</>;
  }
}

export default ContactUs;
