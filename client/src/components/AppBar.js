import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from "../App";
import axios from "axios";
import { useLocation } from "react-router";

const pages = ['FIND A LAWYER', 'LEGAL ADVICE', 'LEGAL SERVICES', 'ABOUT', 'MY ACCOUNT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  // const location = useLocation();
  // const path = location.pathname;
  //   console.log(path)
  // const { id } = useParams()
  //   console.log(id)
  const [user, setUser] = useState([]);
  const {state, dispatch } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);
  const [anchorElMyAccount, setAnchorElMyAccount] = React.useState(null);

  const openMyAccount = Boolean(anchorElMyAccount);
  const openDropdown = Boolean(anchorElDropdown);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // window.setTimeout(function () {
  //   window.location.reload();
  // }, 1000);

console.log(state)
// if(!state){
//   window.location.reload()
// }
  const loadUser = async () => {
    try {
      const res = await axios.get('/data',
        {
          headers: {
            "Content-Type": "application/json"
        },
        })
      setUser(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    loadUser()

  }, []);


  // const RenderMenu = () => {
  //   if (state) {
  //     return (<><MenuItem onClick={handleClose}><Link to={"/signup/"+user._id}>My Account</Link></MenuItem>
  //       <MenuItem onClick={handleLogout}><Link to="/logout">Logout</Link></MenuItem></>)
  //   } else {
  //     return (<>
  //       <MenuItem onClick={handleClose}><Link to="/signup">Sign Up</Link></MenuItem>
  //       <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
  //     </>
  //     )
  //   }
  // }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const handleClickDropdown = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleClickMyAccount = (event) => {
    setAnchorElMyAccount(event.currentTarget);
  };
  const handleCloseMyAccount = () => {
    setAnchorElMyAccount(null);
  };

  return (
    <AppBar position="static" style={{ position: "sticky", top: "0", zIndex: "1" }}>
      <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg:'flex', md: 'flex' }, justifyContent: "space-evenly", color: "black" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="logo_div"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
            >
              <a href="/"><img className="logo" src={logo}></img></a>
            </Typography>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickDropdown}
            >
              FIND A LAWYER
            </Button>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickMyAccount}
              aria-hidden="false"
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElMyAccount}
              open={openMyAccount}
              onClose={handleCloseMyAccount}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              MenuProps={{ MenuListProps: { disablePadding: true } }}
              dense={true}
              inputProps={{MenuProps: {disableScrollLock: true}}}
            >
              {/* <RenderMenu /> */}
              {state ? (<><MenuItem dense={true} onClick={handleClose}><Link to={`/signup/${user}`}>My Account</Link></MenuItem>
                <MenuItem dense={true} onClick={handleLogout}><Link to="/logout">Logout</Link></MenuItem></>) : (<><MenuItem dense={true} onClick={handleClose}><Link to="/signup">Sign Up</Link></MenuItem>      <MenuItem dense={true} onClick={handleClose}><Link to="/login">Login</Link></MenuItem>  </>)}

            </Menu>
            <Menu
              id="basic-menu"
              anchorEl={anchorElDropdown}
              open={openDropdown}
              onClose={handleCloseDropdown}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              MenuProps={{ MenuListProps: { disablePadding: true } }}
              dense={true}
              inputProps={{MenuProps: {disableScrollLock: true}}}
              

            >
              <div style={{ display: "flex" }}>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Personal/Family</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a href="/lawyers/search">Divorce</a></li>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a href="/lawyers/search">Family Dispute</a></li>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a href="/lawyers/search">Child Custody</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Corporate Law</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a>Arbitration</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Civil / Debt Matters</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a>Divorce</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Criminal / Property</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a>Criminal</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Others</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}><a>Armed Forces Tribunal</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
                <MenuItem onClick={handleCloseDropdown}><div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ position: "static", textAlignl: "left", color: "#337ab7", textDecoration: "underline" }}>
                      Talk to a Lawyer</div>
                    <ul>
                      <li style={{ fontSize: "14px", listStyle: "none" }}>Need help to find the right lawyer? <a href="/talktolawyer" style={{
                        color: "#2196f3", padding: "6px 15px",
                        marginTop: "8px",
                        fontSize: "12px",
                        fontWeight: "600", border: "1px solid #2196f3", background: "white"
                      }}>Start Here</a></li>
                    </ul>
                  </div>
                </div></MenuItem>
              </div>
            </Menu>

              <IconButton style={{ fontSize: '18px' }} onClick={handleOpen} sx={{ p: 0 }} size="large" aria-label="search">
                <SearchIcon />
               <Link to="/lawyers/search">Search</Link>
              </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, color: 'white' }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              inputProps={{MenuProps: {disableScrollLock: true}}}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container >
    </AppBar >
  );
};
export default ResponsiveAppBar;

