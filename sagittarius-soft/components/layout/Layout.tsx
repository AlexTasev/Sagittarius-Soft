import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.scss";
import { useTheme } from "@material-ui/core";

const Layout: React.FC<{ onSwitchMode: () => void }> = ({ onSwitchMode, children }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.type === 'dark' ? true : false;

  return (
    <>
      <Head>
        <title>Sagittarius Soft</title>
        <meta name="description" content="Sagittarius Soft company web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onSwitchMode={onSwitchMode} mode={isDarkMode}/>
      <main className={classes.layout}>{children}</main>
      <Footer onSwitchMode={onSwitchMode} mode={isDarkMode}/>
    </>
  );
};

export default Layout;
