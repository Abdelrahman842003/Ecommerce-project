import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandMore, Translate } from "@mui/icons-material";
import menuArr from "./menuArr";

export default function Links() {
  return (
    <>
      {menuArr.map((items) => {
        return (
          <Box
            key={items.mainLink}
            sx={{
              ":hover .paper_hover": {
                display: "block",
              },

              position: "relative",
              display: "flex",
              alignItems: "center",
              zIndex:1000
            }}
          >
            <Typography>{items.mainLink}</Typography>
            <ExpandMore sx={{ fontSize: "16px", ml: 1 }}></ExpandMore>
            <Box
              className="paper_hover"
              sx={{
                position: "absolute",
                top: "100%",
                width: "150px",
                left: "50%",
                transform: "Translate(-50%)",
                display: "none",
              }}
            >
              <Paper sx={{ mt: 3 }}>
                <nav aria-label="secondary mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Product" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Add Product" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Delate" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Action" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="Items" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Paper>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
