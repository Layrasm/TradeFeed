import React from 'react';
import '../sidebar.css';

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon className="icon" />
      <h2>{text}</h2>
    </div>
  )
};

export default SidebarOption;