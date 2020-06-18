import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./styles";

interface Props {}

const ActionButtons = () => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <div>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
};

const NavBar = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Gardener</Typography>
          <ActionButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { NavBar };
