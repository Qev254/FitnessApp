// fitness/client/src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { Search as SearchIcon, AccountCircle, Notifications } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo and Search Input */}
        <Typography variant="h6" noWrap component="div">
          Fitness App
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <IconButton size="large" edge="end" color="inherit">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search..." />
        </div>
        {/* User Icon and Notifications */}
        <div>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
              <Notifications />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
