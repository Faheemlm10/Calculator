import React from "react";
import { Box } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { UserContext, Initial } from "./useContext";
import { InitialContext } from "./InitialContext";

const Numbers = () => {
  const { value, setValue } = useContext(UserContext);
  const { initial, setInitial } = useContext(InitialContext);
  const [equation, setEquation] = useState([]);
  const [click, setClick] = useState();

  const numberClickFunction = (e) => {
    setClick(e.target.value);
    setValue(value + " " + e.target.value);
    setEquation([...equation, e.target.value]);
    setInitial(true);
    console.log(e.target.value);
    console.log(equation);
  };
  return (
    <Box
      width="28rem"
      bgcolor="hsl(223, 31%, 20%)"
      mt="1.5rem"
      borderRadius=".5rem"
    >
      <div className="number-first">
        <div className="number-first-first">
          <input
            type="button"
            value="7"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="8"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="9"
            className="calculator-btn"
            onClick={numberClickFunction}
          />

          <div className="calculator-btn del">DEL</div>
        </div>
        <div className="number-first-second">
          <input
            type="button"
            value="4"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="5"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="6"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="+"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
        </div>
        <div className="number-first-third">
          <input
            type="button"
            value="1"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="2"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="3"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="-"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
        </div>
        <div className="number-first-fourth">
          <input
            type="button"
            value="."
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="0"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="/"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
          <input
            type="button"
            value="x"
            className="calculator-btn"
            onClick={numberClickFunction}
          />
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
