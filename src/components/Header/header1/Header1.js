import React from "react";
import PageTheme from "../../../theme/PageTheme";
import "../styleHeader.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SimpleListMenu from "./menu";
import { IconButton } from "@mui/material";

export default function Header1() {
  return (
    <div className="Header1">
      <div className="Container1">
        <div className="logo">
          <a style={{textDecoration:"none"}} href="/" className="hot">HOT</a>
          <span className="span2">AEID</span>
        </div>
        <div className="icons">
          <div className="PageTheme">
            <PageTheme />
          </div>
          <div className="menu">
            <SimpleListMenu />
          </div>
          <div className="FacebookIcon">
            <IconButton>
              {" "}
              <FacebookIcon />
            </IconButton>
          </div>

          <div className="InstagramIcon">
            <IconButton>
              {" "}
              <InstagramIcon />
            </IconButton>
          </div>
          <div className="TwitterIcon">
            <IconButton>
              {" "}
              <TwitterIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
