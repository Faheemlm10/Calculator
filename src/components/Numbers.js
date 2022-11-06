import React from "react";
import { Box } from "@mui/material";

const Numbers = () => {
  return (
    <Box
      width="28rem"
      bgcolor="hsl(223, 31%, 20%)"
      mt="1.5rem"
      borderRadius=".5rem"
    >
      <div className="number-first">
        <div className="number-first-first">
          <div className="calculator-btn">7</div>
          <div className="calculator-btn">8</div>
          <div className="calculator-btn">9</div>
          <div className="calculator-btn del">DEL</div>
        </div>
        <div className="number-first-second">
          <div className="calculator-btn">4</div>
          <div className="calculator-btn">5</div>
          <div className="calculator-btn">6</div>
          <div className="calculator-btn">+</div>
        </div>
        <div className="number-first-third">
          <div className="calculator-btn">1</div>
          <div className="calculator-btn">2</div>
          <div className="calculator-btn">3</div>
          <div className="calculator-btn">-</div>
        </div>
        <div className="number-first-fourth">
          <div className="calculator-btn">.</div>
          <div className="calculator-btn">0</div>
          <div className="calculator-btn">/</div>
          <div className="calculator-btn">x</div>
        </div>
        <div className="number-first-fifth">
          <div className="calculator-btn reset">RESET</div>
          <div className="calculator-btn equal">=</div>
          
        </div>
      </div>
    </Box>
  );
};

export default Numbers;
