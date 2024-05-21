import React from "react";
import { Col, Row } from "antd";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
              <div className="restuarant">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, similique, delectus blanditiis odit expedita amet. Sed
                  labore ipsum vel dolore, quis, culpa et magni autem sequi
                  facere eos tenetur, ex?
                </p>
              </div>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
              <div
                className="restuarant"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3>THE RESTAURANT</h3>
                <span>About Us</span>
                <span>Chefs</span>
                <span>Events</span>
                <span>Contact</span>
              </div>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
              <div
                className="restuarant"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3>Useful Links</h3>
                <span>Foods</span>
                <span>Drinks</span>
                <span>Breakfast</span>
                <span>Lunch</span>
              </div>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
              <div
                className="restuarant"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3>Useful Links</h3>
                <span>Foods</span>
                <span>Drinks</span>
                <span>Breakfast</span>
                <span>Lunch</span>
              </div>
            </Col>
          </Row>
        </div>
    <div className="copyright">
    <span className="copy">
          © Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </span>
    </div>
      </div>
    </div>
  );
};

export default Footer;
