import React, { Component } from "react";
import Banner from "./components/Banner";
import Icon from "./components/Icon";
import Nav from "./components/Nav";
import { Container } from "react-bootstrap";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Slider from "./components/Slider";
require("bootstrap");

class App extends Component {
  render() {
    return (
      <Container>
        <div className="mt-5" />
        <Banner />
        <div className="rounded-btn mx-auto mt-5">
          <Icon name={faAngleDown} size="3x" />
        </div>
        <Nav />
        <Slider />
      </Container>
    );
  }
}

export default App;
