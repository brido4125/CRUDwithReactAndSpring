import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';


const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        React User Application
                    </Typography>
                    <Button color="inherit">Login</Button> 
                </Toolbar>
            </AppBar>
        </div>
    );
}

const style = {
    flexGlow: 1
}

export default NavBar;