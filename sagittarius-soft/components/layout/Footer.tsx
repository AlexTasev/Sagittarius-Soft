import React from "react";
import Switch from "@material-ui/core/Switch";

const Footer: React.FC<{ onSwitchMode: () => void }> = ({ onSwitchMode }) => {
  return <Switch color="primary" onChange={onSwitchMode}></Switch>;
};

export default Footer;
