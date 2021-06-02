import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import classes from "./layout.module.scss";

const Header: React.FC<{ mode: boolean, onSwitchMode: () => void }> = ({ mode, onSwitchMode }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img
          src="Sagittarius-logo.png"
          alt="Sagittarius Soft"
          className={classes.logo}
        />
        <Switch color="primary" onChange={onSwitchMode} checked={mode}></Switch>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
