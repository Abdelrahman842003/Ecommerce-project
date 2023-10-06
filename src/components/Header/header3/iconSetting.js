import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styleHeader.css";
import MenuArr from "./menuArr";
import menuArr from "./menuArr";
import Links from "./links";

export default function TemporaryDrawer() {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ ".MuiPaper-root": { width: 300 } }}
          >
            {menuArr.map((item) => {
              return (
                <Accordion
                  key={item.mainLink}
                  elevation={5}
                  sx={{ marginTop: 1 }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.mainLink}</Typography>
                  </AccordionSummary>

                  <List sx={{ p: 0, m: 0 }}>
                    {item.subLink.map((link) => {
                      return (
                        <ListItem key={link} sx={{ p: 0, m: 0 }} disablePadding>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Accordion>
              );
            })}
            <div className="Close">
              <IconButton onClick={toggleDrawer(anchor, false)} 
              sx={{":hover":{rotate:"180deg",transition:".3s", color:"red"} }}
              >
                {" "}
                <Close />
              </IconButton>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
