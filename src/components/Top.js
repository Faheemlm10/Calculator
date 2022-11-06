import { Stack, Typography } from "@mui/material";
import React from "react";

const Top = () => {
  return (
    <Stack
      width="28rem"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography fontSize="22px" className="calc" fontWeight="bold" ml="0.5rem">
        calc
      </Typography>
      <Typography fontSize="11px" className="theme" fontWeight="100" >
        THEME
        <div>toggle</div>
      </Typography>
     
    </Stack>
  );
};

export default Top;
