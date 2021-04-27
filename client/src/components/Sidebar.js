import React from 'react';
import '../sidebar.css';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SidebarOption from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';

function Sidebar() {
  return (
    <div className="sidebar">

      <ShowChartIcon />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />


    </div>

  )
};

export default Sidebar;