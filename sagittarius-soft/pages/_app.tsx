import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "@fontsource/roboto";
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";

const SagittariusSoft = ({ Component, pageProps }: AppProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: { main: "#00657E" },
    },
  });

  const switchModeHandler = () => {
    setDarkMode(!darkMode);
  };

  darkMode ? (theme.palette.type = "dark") : (theme.palette.type = "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout onSwitchMode={switchModeHandler}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default SagittariusSoft;
