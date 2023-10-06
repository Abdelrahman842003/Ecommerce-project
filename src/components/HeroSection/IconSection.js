import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Container, Stack } from "react-bootstrap";
import { Box, Divider, Typography } from "@mui/material";
import "./heroSection.css";
import { useTheme } from "@emotion/react";
export default function IconSection() {
  return (
    <Container className="containerIcon">
      <Stack className="stackIcon">
        <MyBox
          subTitle={"Start from $10"}
          title={"Fast Delivery"}
          icon={<ElectricBoltIcon />}
        />
        <MyBox
          subTitle={"7 Days Back"}
          title={"Money Guarantee"}
          icon={<WorkspacePremiumIcon />}
        />
        <MyBox
          subTitle={"For Free return"}
          title={"365 Days"}
          icon={<CreditScoreIcon />}
        />
        <MyBox
          subTitle={"secure system"}
          title={"Payment"}
          icon={<AccessAlarmIcon />}
        />
      </Stack>
    </Container>
  );
}
const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        flexGrow: 1,
        background: theme.palette.backgroundIcon.main,
      }}
      key={icon}
    >
      {icon}

      <Typography variant="body1">{title}</Typography>
      <Typography sx={{ color: theme.palette.text.seconde }} variant="body1">
        {subTitle}
      </Typography>
    </Box>
  );
};
