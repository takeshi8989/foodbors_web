import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const isLoggedIn = false

export const Header = () => {
  const forwardHome = () => {
    window.location.href = '/'
  }
  const forwardLogin = () => {
    window.location.href = '/login'
  }

  const forwardSignup = () => {
    window.location.href = '/signup'
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={forwardHome}>
            Foodbors
          </Typography>

          {isLoggedIn ? (
            <>
              <Button color="inherit">Username</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={forwardLogin}>
                Login
              </Button>
              <Button color="inherit" onClick={forwardSignup}>
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
