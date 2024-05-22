import { Col, Row } from "antd";
import { FaFacebook } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={12}>
              <div
                className="aboutus"
                style={{ display: "flex", gap: "20px", fontSize: "20px" }}
              >
                <div>Blog</div>
                <div>Faqs</div>
                <div>Contact us</div>
              </div>
              <br />
              <br />
              <br />
              <span>
                ©2018 All Rights Reserverd. This template is made with by
                Colorlib
              </span>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={12}>
              <div className="icons">
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
