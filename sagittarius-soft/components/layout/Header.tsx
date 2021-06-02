import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import classes from "./layout.module.scss";

const Header: React.FC<{ mode: boolean; onSwitchMode: () => void }> = ({
  mode,
  onSwitchMode,
}) => {
  let showMenuIcon = false;

  if (process.browser) {
    showMenuIcon = window.innerWidth < 620 ? true : false;
  }

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.navigation}>
        <img
          src="Sagittarius-logo.png"
          alt="Sagittarius Soft"
          className={classes.logo}
        />
        <Box>
          {!showMenuIcon && (
            <>
              <Button color="inherit">About</Button>
              <Button color="inherit">Tech Stack</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contacts</Button>
            </>
          )}
          <Switch
            color="primary"
            onChange={onSwitchMode}
            checked={mode}
          ></Switch>
          {showMenuIcon && (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon color="primary" />
              </IconButton>
              {/* <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
              >
                {sideDrawerList("right")}
              </Drawer> */}
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
