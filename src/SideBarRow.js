import React from 'react'
import './SideBarRow.css';

function SideBarRow({Icon,title}) {
    return (
        <div className={`sideBarRow ${(window.location.pathname === '/' && title === 'Home') ? "selected" : ""}`}>
            <Icon className="sideBarRow__icon" />
            <h5 className="sideBarRow__title">{title}</h5>
        </div>
    )
}

export default SideBarRow
