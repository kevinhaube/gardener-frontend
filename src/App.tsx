import React from "react";
import { Typography, Grid, ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components/AppBar/NavBar";
import { GardenerTheme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={GardenerTheme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
