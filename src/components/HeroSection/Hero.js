import React from "react";
import "./heroSection.css";
import Photo1 from "../imgs/banner-16.jpg";
import Photo2 from "../imgs/banner-17.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhotoHero from "./swiper/photoHero";
import { useTheme } from "@mui/material";
export default function Hero() {
  const theme=useTheme();
  return (
    <div className="parent_hero"
    
    style={{
      backgroundColor:theme.palette.background.main
    }}>
      <div className="container_hero">
        <div className="box1">{<PhotoHero/>}</div>
        <div className="box2">
          <div className="photo1">
            <img alt="" src={Photo2} />
            <div className="text_p">
              <p>New Arrivals</p>
              <p>Summer</p>
              <p>Sale 20% OFF</p>
              <span>Shop Now {<ArrowForwardIcon />}</span>
            </div>
          </div>
          <div className="photo2">
            <img alt="" src={Photo1} />

            <div className="text_p2">
              <p>New Arrivals</p>
              <p>Summer</p>
              <p>Sale 20% OFF</p>
              <span>Shop Now {<ArrowForwardIcon />}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
