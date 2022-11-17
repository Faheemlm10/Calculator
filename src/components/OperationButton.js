import { useContext, useState, useEffect, useReducer } from "react";
import { ACTIONS } from "./Numbers";
import { UserContext, Initial } from "./useContext";
import { InitialContext } from "./InitialContext";

const OperationButton = ({ dispatch, operation }) => {

  return (
    <button
      className="calculator-btn"
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation  } });
        
      }}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
