import React from 'react';
import "../styles/headerOption.css"
import {Avatar} from "@mui/material"

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={avatar} />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>);
}

export default HeaderOption;
