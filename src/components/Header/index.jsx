import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: {
      main: '#89ca94',
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src="https://hoanghamobile.com/favicon.ico" alt="Logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>
          <Typography variant="h6">
            Clother shop
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Tìm kiếm..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <Avatar alt="User" src="path_to_user_image.jpg" />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
