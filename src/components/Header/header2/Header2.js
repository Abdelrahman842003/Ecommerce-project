import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FunSearch from "./search";
import CustomizedBadges from "./badge";
import SimpleListMenu from "../header1/menu";
import SimpleListMenu2 from "./menu2";
import AccountMenu from "./person";
export default function Header2() {
  return (
    <div className="Header2">
      <div className="Container2">
        <div className="box1">
          <ShoppingCartIcon />
          <p>E-commerce</p>
        </div>
        <div className="box2">
          <div className="FunSearch">
            <FunSearch />
          </div>

          <div className="SimpleListMenu2">
            <SimpleListMenu2 />
          </div>
        </div>
        <div className="box3">
          <div>
            <CustomizedBadges />
          </div>
          <div className="PersonIcon">
            <AccountMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
