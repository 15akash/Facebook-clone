import React from "react";
import "./Header.css";

import logo from "./logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        <img className="logo" src={logo} alt="fb-logo" />
        <div className="header-input">
          <SearchIcon />
          <input placeholder=" Search Facebook" type="text" />
        </div>
      </div>
      <div className="header-middle">
        <div
          className="header-option
           header-option-active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
