import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../heroSection.css";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import "./swiper.css";
import Photo1 from "../../imgs/banner-15.jpg";
import Photo2 from "../../imgs/banner-25.jpg";
// import required modules
import { Pagination } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function photoHero() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="SwiperSlide">
          <img alt="" src={Photo1} />
          <div className=" text-photo">
            <p className="p1">lifestyle collection</p>
            <p className="p2">Summer</p>
            <p className="p3">
              Sale up to<span> 20% OFF</span>
            </p>
            <p className="p4">
              get free shipping on orders oner <span> $99.00</span>
            </p>
            <button className="buttonPhoto">
              Shop Now {<ArrowForwardIcon />}
            </button>{" "}
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <img alt="" src={Photo2} />{" "}
          <div className=" text-photo">
            <p className="p1">lifestyle collection</p>
            <p className="p2">Summer</p>
            <p className="p3">
              Sale up to<span> 20% OFF</span>
            </p>
            <p className="p4">
              get free shipping on orders oner <span>$99.00</span>
            </p>
            <button className="buttonPhoto">
              Shop Now {<ArrowForwardIcon />}
            </button>{" "}
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
