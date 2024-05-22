import { Button } from "@material-ui/core";
import "./home.scss";
import { useGetProductQuery } from "../../services/productApi";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { CiShoppingBasket } from "react-icons/ci";
import { useContext } from "react";
import { Col, Row } from "antd";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data } = useGetProductQuery();
  const { basket, setBasket } = useContext(BasketContext);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero">
        <div className="container">
          <div className="heroText" style={{ paddingTop: "170px" }}>
            <span>SPRING / SUMMER COLLECTION 2017</span>
            <h1 style={{ fontSize: "50px" }}>Get up to 30% Off New Arrivals</h1>
            <Button
              style={{
                padding: "10px",
                width: "20%",
                backgroundColor: "red",
                marginTop: "40px",
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <section className="cardsss">
        <div className="container">
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ paddingTop: "40px" }}
          >
            <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
                alt=""
              />
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
                alt=""
              />
            </Col>{" "}
            <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </section>

      <section className="blackSec">
        <div className="container">
          <div className="blackSecTitle">
            <h1 className="new">New Arrivals</h1>
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {data?.data &&
              data?.data.map((product) => {
                return (
                  <Col
                    className="gutter-row"
                    span={6}
                    xs={24}
                    md={12}
                    lg={8}
                    key={product._id}
                  >
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <p>$55{product.price}</p>
                    <Button type="submit" variant="outlined">
                      <Link to={`/${product._id}`}>Detail</Link>
                    </Button>
                    <Button
                      onClick={() => {
                        const duplicatedItem = basket.find(
                          (x) => x._id === product._id
                        );
                        if (duplicatedItem) {
                          duplicatedItem.count += 1;
                          setBasket([...basket]);
                          localStorage.setItem(
                            "basket",
                            JSON.stringify(basket)
                          );
                        } else {
                          const newItem = { ...product };
                          newItem.count = 1;
                          setBasket([...basket, newItem]);
                          localStorage.setItem(
                            "basket",
                            JSON.stringify([...basket, newItem])
                          );
                        }
                      }}
                    >
                      <CiShoppingBasket style={{ fontSize: "40px" }} />
                    </Button>
                  </Col>
                );
              })}
          </Row>
        </div>
      </section>

      <section className="best">
        <div className="container">
          <div className="sellers">
            <h1>Best Sellers</h1>
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={6}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                alt=""
              />
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={6}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/product_2.png"
                alt=""
              />
            </Col>{" "}
            <Col className="gutter-row" span={6} xs={24} md={24} lg={6}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/product_3.png"
                alt=""
              />
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={6}>
              <img
                src="https://preview.colorlib.com/theme/coloshop/images/product_3.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="latest">
        <div className="container">
          <div className="blog">
            <h1>Latest Blog</h1>
          </div>
          <div className="latestblog">
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              style={{ paddingTop: "40px" }}
            >
              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
                  alt=""
                />
              </Col>
              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
                  alt=""
                />
              </Col>{" "}
              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="newsLetter">
        <div className="container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={12}>
              <div className="letter">
                <h3 style={{fontSize:"30px"}}>NewsLetter</h3>
                <p>
                  Subscribe to our newsletter and get 20% off your first
                  purchase
                </p>
              </div>
            </Col>
            <Col className="gutter-row" span={6} xs={24} md={24} lg={12}>
              <input type="text" placeholder="Your Email"  />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Home;
