import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Display from "./components/Display";
import Numbers from "./components/Numbers";
import { Stack } from "@mui/material";
import { UserContext } from "./components/useContext";
import { InitialContext } from "./components/InitialContext";
import { useState, useContext } from "react";

function App() {
  const [value, setValue] = useState('');
  const [initial,setInitial] = useState(false)
  const [equation, setEquation] = useState([]);
 

  return (
    <Stack
      alignItems="center"
      height="100vh"
      width="100vw"
      justifyContent="center"
    >
      <Top />

      <UserContext.Provider value={{ value, setValue}}>
        <InitialContext.Provider value={{initial,setInitial}}>      
        <Display />
        <Numbers />
        </InitialContext.Provider > 
      </UserContext.Provider>
    </Stack>
  );
}

export default App;
