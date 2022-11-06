import logo from "./logo.svg";
import "./App.css";
import Top from "./components/Top";
import Display from "./components/Display";
import Numbers from "./components/Numbers";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack
      alignItems="center"
      height="100vh"
      width="100vw"
      justifyContent="center"
    >
      <Top />
      <Display />
      <Numbers />
    </Stack>
  );
}

export default App;
