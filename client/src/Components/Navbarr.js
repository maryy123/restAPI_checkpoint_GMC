import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbarr = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{background:"#E0C097"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/"><img src="https://www.liberaterva.com/wp-content/uploads/2019/07/email-icon_gold.png" alt="logo" width="70px" style={{borderRadius:"50px"}}/></Link>
            </IconButton>
            <Button color="inherit"><Link to="/addcontact">Add Contact</Link></Button>
            <Button color="inherit"><Link to="/contacts">Contats List</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbarr
