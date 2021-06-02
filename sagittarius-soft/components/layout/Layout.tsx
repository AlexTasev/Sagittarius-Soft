import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./layout.module.scss";

const Layout: React.FC<{ onSwitchMode: () => void }> = ({ onSwitchMode, children }) => {
  return (
    <>
      <Head>
        <title>Sagittarius Soft</title>
        <meta name="description" content="Sagittarius Soft company web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onSwitchMode={onSwitchMode} />
      <main className={classes.layout}>{children}</main>
      <Footer onSwitchMode={onSwitchMode}/>
    </>
  );
};

export default Layout;
