import { Box } from "@mui/material";
import React from "react";

const Display = () => {
  return (
    <Box
      bgcolor="hsl(224, 36%, 15%)"
      width="28rem"
      height="8rem"
      className="display-box"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      mt="1.5rem"
    >
      <span>0</span>
    </Box>
  );
};

export default Display;
