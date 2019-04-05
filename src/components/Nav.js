import React, { Component } from "react";
import Social from "./Icon";
import { Row } from "react-bootstrap";

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact
          </a>
        </li>
        <Row className="icon-right">
          <Social type="fab" name="facebook" />
          <div className="mr-3" />
          <Social type="fab" name="twitter" />
          <div className="mr-3" />
          <Social type="fab" name="instagram" />
        </Row>
      </ul>

      //   <div className="tab-content" id="myTabContent">
      //     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
      //     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
      //     <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      //   </div>
    );
  }
}
