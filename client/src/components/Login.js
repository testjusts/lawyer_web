import React, { useState, Fragment, useRef, useContext, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom'
import About from './About';
import Footer from './Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import DefaultUserPic from "../img/team-male.jpg"
import { UserContext } from "../App";

// const data = createContext();

const theme = createTheme();

export default function Login() {
  // const { id } = useParams()
  const PF = "http://localhost:5000/"
  // const uploadInputRef = useRef(null);
  const { state, dispatch } = useContext(UserContext)
  const [user, setUser] = useState();
  const formRef = React.useRef();
  const history = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  //   const handleImg = (e) => {
  //     console.log(e.target.files[0])
  //     setImg(e.target.files[0])
  //   }

  const PostData = async (e) => {
    formRef.current.reportValidity()
    e.preventDefault();
    const res = await fetch('/login',
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })

    const data = await res.json();
    setUser(data)

    if (res.status === 422) {
      window.alert('Invalid Credientials')
    } else {
      dispatch({ type: "USER", payload: true })
      window.alert('Login Successfull!, Please Verify your Email to Continue...')
      console.log('Login Successfull!')

        history(`/`)
    }
  }

  return (

    <div>
      <div class="container">
        <div class="row myRow" >
          <div class="col-sm-5">
            <ThemeProvider theme={theme} className='signup'>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h1" variant="h5" style={{margin:"1rem 0rem"}}>
                    Login
                  </Typography>
                  <form sx={{ mt: 3 }} ref={formRef} method="POST">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          type="text"
                          label="Name"
                          name="name"
                          value={name}
                          onChange={handleName}
                          autoComplete="name"
                          style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          type="email"
                          label="Email Address"
                          name="email"
                          value={email}
                          onChange={handleEmail}
                          autoComplete="email"
                          style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={password}
                          onChange={handlePassword}
                          autoComplete="new-password"
                          style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      onClick={PostData}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Login
                    </Button>
                    {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
                  </form>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  )
}
// export { data };