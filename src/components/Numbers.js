import React from "react";
import { Box } from "@mui/material";
import { useContext, useState, useEffect, useReducer } from "react";
import { UserContext, Initial } from "./useContext";
import { InitialContext } from "./InitialContext";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
  }
};

const Numbers = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  const { value, setValue } = useContext(UserContext);
  const { initial, setInitial } = useContext(InitialContext);
  const [equation, setEquation] = useState("");
  const [click, setClick] = useState();
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [operand, setOperand] = useState("");
  const [answer, setAnswer] = useState();

  return (
    <Box
      width="28rem"
      bgcolor="hsl(223, 31%, 20%)"
      mt="1.5rem"
      borderRadius=".5rem"
    >
      <div className="number-first">
        <div className="number-first-first">
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <div className="calculator-btn del">DEL</div>
        </div>
        <div className="number-first-second">
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
        </div>
        <div className="number-first-third">
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
        </div>
        <div className="number-first-fourth">
          <DigitButton digit="." dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <OperationButton operation="/" dispatch={dispatch} />
          <OperationButton operation="x" dispatch={dispatch} />
        </div>
        <div className="number-first-fifth">
          <div
            className="calculator-btn reset"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            RESET
          </div>
          <div className="calculator-btn equal">=</div>
        </div>
      </div>
      <div>{previousOperand}</div>
      <div>{currentOperand}</div>
    </Box>
  );
};

export default Numbers;
