import { Box } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./useContext";
import { InitialContext } from "./InitialContext";

const Display = () => {
  const { value, setValue } = useContext(UserContext);
  const { initial, setInitial } = useContext(InitialContext);

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
      {!initial ? <span>0</span> : <span>{value}</span>  }
      
    </Box>
  );
};

export default Display;
