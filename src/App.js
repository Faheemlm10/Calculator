import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Display from "./components/Display";
import Numbers from "./components/Numbers";
import { Stack } from "@mui/material";
import { UserContext } from "./components/useContext";

function App() {
  return (
    <Stack
      alignItems="center"
      height="100vh"
      width="100vw"
      justifyContent="center"
    >
      <Top />

      <UserContext.Provider value="gh">
        <Display />
        <Numbers />
      </UserContext.Provider>
    </Stack>
  );
}

export default App;
