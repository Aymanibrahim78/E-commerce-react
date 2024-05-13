
import Headers from "./components/1-header/Headers";
// import { ColorModeContext ,useMode} from "./theame";
import {  CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./theame";
import Footer from "./components/4-footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

import ButtonToTop from "./components/ButtonToTop";

import { useEffect } from 'react';
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  const [mode, setMode] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"dark");
 
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className={mode} >
        <Headers setMode={setMode} />
        <ButtonToTop/>

        <Outlet/>
       
       < Footer/>
</div>
  </ThemeProvider>
  );
}

export default App;
