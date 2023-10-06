import React from "react";
import "./mainStyle.css";
import ToggleButtons from "./toggleIcon";
import MediaCard from "./products";
import ScrollToTopFab from "../scroll/Scroll";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
export default function Main() {
  const statProduct = useSelector((state) => state.cart);
  return (
    <div className="parent_main">
      <div className="container_main">
        <div className="box1">
          <div className="text">
            <h2>Selected Products</h2>
            <p>All our new arrivals in a exclusive brand selection</p>
            <Link to="/cart">
              <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
                Cart ({statProduct.length})
              </Button>
            </Link>
          </div>
          {/* <div className="toggle">
            <ToggleButtons />
          </div> */}
        </div>
        <div className="box2">
          <MediaCard />
          <ScrollToTopFab />
        </div>
      </div>
    </div>
  );
}
