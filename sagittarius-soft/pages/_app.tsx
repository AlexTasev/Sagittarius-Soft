import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Switch } from "@material-ui/core";
import "@fontsource/roboto";
import "../styles/globals.scss";

function SagittariusSoft({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default SagittariusSoft;
