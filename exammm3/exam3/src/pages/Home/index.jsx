import { Button, Grid } from "@mui/material";
import React from "react";
import "./home.scss";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../component/services/productApi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Home = () => {
  const { data, refetch } = useGetProductQuery();
  const [deletedProduct] = useDeleteProductMutation();
  return (
    <div>
      <div className="hero">
        <div className="herotext">
          <h1 className="welcome">Welcome To EatWell</h1>
          <p className="healthy">
            Come and eat well with our delicious & healthy foods.
          </p>
          <button className="reser">Reservation</button>
        </div>
      </div>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          {data?.data &&
            data?.data.map((product) => {
              return (
                <SwiperSlide>
                  {" "}
                  <div className="cards" style={{ display: "flex" }}>
                    <div className="card">
                      <div className="cardImage">
                        <img src={product.image} alt="" />
                      </div>

                      <div className="cardPriceTitle">
                        <h4>{product.price}</h4>
                        <h2>{product.title}</h2>

                        <Button variant="outlined">Basket</Button>
                        <Button
                          variant="outlined"
                          onClick={async () => {
                            await deletedProduct(product._id);
                            refetch();
                          }}
                        >
                          Delete
                        </Button>
                        <Link
                          to={`/detail/${product._id}`}
                          style={{ color: "blue" }}
                        >
                          Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div className="container">
          <div className="news">
            <div className="newsTitle">
              <h1>News</h1>
              <p>
                Far far away, behind the word mountains, far from the countries{" "}
                <br /> Vokalia and Consonantia, there live the blind texts.!
              </p>
            </div>

            <Grid container spacing={2} style={{ paddingTop: "120px" }}>
              {data?.data &&
                data?.data.map((product) => {
                  return (
                    <Grid item xs={4}>
                      {" "}
                      <div className="cards" style={{ display: "flex" }}>
                        <div className="card">
                          <div className="cardImage">
                            <img src={product.image} alt="" />
                          </div>

                          <div className="cardPriceTitle">
                            <h4>{product.price}</h4>
                            <h2>{product.title}</h2>

                            <Button variant="outlined">Basket</Button>
                            <Button
                              variant="outlined"
                              onClick={async () => {
                                await deletedProduct(product._id);
                                refetch();
                              }}
                            >
                              Delete
                            </Button>
                            <Link
                              to={`/detail/${product._id}`}
                              style={{ color: "blue" }}
                            >
                              Detail
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="gallery">
              <div className="galleryText">
                <h1>Gallery</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries <br />
                   Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div class="parent" style={{paddingTop:"80px"}}>
                <div class="div1">
                  {" "}
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                    alt=""
                  />
                </div>
                <div class="div2">
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
                    alt=""
                  />{" "}
                </div>
                <div class="div3">
                  {" "}
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                    alt=""
                  />
                </div>
                <div class="div4">
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                    alt=""
                  />{" "}
                </div>
                <div class="div5">
                  {" "}
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                    alt=""
                  />
                </div>
                <div class="div6">
                  {" "}
                  <img
                    src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
