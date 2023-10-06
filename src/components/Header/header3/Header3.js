import React from "react";
import BasicMenu from "./menu3";
import MenuIcon from "@mui/icons-material/Menu";
import PersistentDrawerRight from "./iconSetting";
import Links from "./links";

export default function Header3() {
  return (
    <div className="Header3">
      <div className="Container3">
        <div className="box01">
          <BasicMenu />
        </div>
        <div className="box02">
          <PersistentDrawerRight />
        </div>
        <div className="Links">
          <Links />
        </div>
      </div>
    </div>
  );
}
