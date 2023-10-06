import React from "react";
import "./footer.css";
import { useTheme } from "@mui/material";
export default function Footer() {
    const theme =useTheme()
  return (
    <div className="parent_footer" style={{backgroundColor:"#2B3445"}}>
      <footer>
        <div className="textFooter" >
          {" "}
         
          <p>Designed and Developed</p>
          <span>abdelrahman eid</span>
          <p>Copyright &copy; 2023</p>
        </div>
        
      </footer>
    </div>
  );
}
