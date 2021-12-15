import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Switch,
  List,
  ListItem,
  Drawer,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./layout.module.scss";

const Header: React.FC<{ mode: boolean; onSwitchMode: () => void }> = ({
  mode,
  onSwitchMode,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  let showMenuIcon = false;

  if (process.browser) {
    showMenuIcon = window.innerWidth < 620 ? true : false;
  }

  const toggleDrawer = (drawerState: boolean) => {
    setOpenDrawer(true);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.navigation}>
        <Link href="/">
          <a>
            <img
              src="Sagittarius-logo.png"
              alt="Sagittarius Soft"
              className={classes.logo}
            />
          </a>
        </Link>
        <Box>
          {!showMenuIcon && (
            <>
              <Button color="inherit">
                <Link href="/projects">
                  <a>About</a>
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/projects">
                  <a>Tech Stack</a>
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </Button>
              <Button color="inherit">
                <Link href="/projects">
                  <a>Contacts</a>
                </Link>
              </Button>
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
                onClick={toggleDrawer(true)}
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
                <List>
                  <ListItem color="inherit">
                    <Link href="/projects">
                      <a>About</a>
                    </Link>
                  </ListItem>
                  <ListItem color="inherit">
                    <Link href="/projects">
                      <a>Tech Stack</a>
                    </Link>
                  </ListItem>
                  <ListItem color="inherit">
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </ListItem>
                  <ListItem color="inherit">
                    <Link href="/projects">
                      <a>Contacts</a>
                    </Link>
                  </ListItem>
                </List>
              </Drawer>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
