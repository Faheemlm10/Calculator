import { useContext, useState, useEffect, useReducer } from "react";
import { ACTIONS } from "./Numbers";
import { UserContext, Initial } from "./useContext";
import { InitialContext } from "./InitialContext";

const DigitButton = ({ dispatch, digit }) => {
  
  return (
    <button
      className="calculator-btn"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
        
      }}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
