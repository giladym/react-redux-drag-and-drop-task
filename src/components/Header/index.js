import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {
    return (
         <AppBar position="fixed" color="default" >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Drag And Drop Task
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;