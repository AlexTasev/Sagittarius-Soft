import React from "react";
import Switch from "@material-ui/core/Switch";

const Footer: React.FC<{ mode: boolean, onSwitchMode: () => void }> = ({ mode, onSwitchMode }) => {
  return (
    <Switch color="primary" onChange={onSwitchMode} checked={mode}></Switch>
  );
};

export default Footer;
