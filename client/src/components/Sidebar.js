import React from 'react';
import '../sidebar.css';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SidebarOption from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className="sidebar">

      <ShowChartIcon className="chartIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <Button variant="outlined" className="sidebarPost" fullWidth>
        New Post
      </Button>


    </div>

  )
};

export default Sidebar;