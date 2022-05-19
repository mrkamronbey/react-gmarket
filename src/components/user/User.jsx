import React from "react";
import user from "../../assets/user.png";
import share from "../../assets/share.png";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SidebarList from "../sidebarList/SidebarList";
function User() {
  return (
    <>
      <div className="c-sidebar-box">
        <div className="c-user-box">
          <IconButton>
            <SettingsIcon className="c-user-icon" />
          </IconButton>
          <img src={user} alt="icon" />
          <IconButton>
            <NotificationsIcon className="c-user-icon" />
          </IconButton>
        </div>
        <div className="c-user-info-box">
          <h2>Roberto Cavanali</h2>
          <p>(+99893) 100-00-00</p>
        </div>
        <div className="c-wallet-box">
          <div className="c-balanc-box">
            <div>
              <h4>Wallet balance</h4>
              <p>$425,97</p>
            </div>
            <IconButton className="c-balnc-btn">
              <i class="bx bx-plus"></i>
            </IconButton>
          </div>
          <Button variant="contained" className="c-wallet-btn">
            <img src={share} alt="icon" />
            <span>Share wallet</span>
          </Button>
        </div>
        <SidebarList />
      </div>
    </>
  );
}

export default User;
