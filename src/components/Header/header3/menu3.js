import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ width: "222px", bgcolor: "transparent" }}
      >
        <WindowIcon />
        <Typography sx={{ Padding: "0", textTransform: "capitalize", mx: 1 }}>
          Categories
        </Typography>
        <Box flexGrow={1} />
        <KeyboardArrowRightIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ ".MuiPaper-root": { width: 220,} }}
      >
        <MenuItem>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ElectricBikeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electrics</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <LaptopChromebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Gams</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}
