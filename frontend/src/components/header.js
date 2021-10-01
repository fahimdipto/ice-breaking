import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import {IconButton} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum'
import Logo from "../Images/logo2.png"
import "./header.css"

const Header=(props) =>{
    return (
        <div className="header">
            <IconButton><PersonIcon fontSize="large" className="header_icon"/></IconButton>
            <img className="header_logo" src={Logo} alt="image"/>
            <IconButton><ForumIcon fontSize="large" className="header_icon"/></IconButton>

        </div>
    );
}

export default Header;