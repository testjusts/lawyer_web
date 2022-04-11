import React, { useState, Fragment, useRef, createContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import About from '../components/About';
import Footer from '../components/Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import DefaultUserPic from "../img/team-male.jpg"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// const data = createContext();

const theme = createTheme();

export default function SignUp() {
    const PF = "http://localhost:5000/"
    // const uploadInputRef = useRef(null);
    const formRef = React.useRef();
    const history = useNavigate();
    // const [user_Data, setUserData] = useState({ name: "", phone: "", email: "", password: "", cpassword: "", role: "" })
    // let name, value;
    // const handleInputs = (e) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUserData({...user_Data, [name]:value})
    //     console.log(value)
    // }


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [img, setImg] = useState(null)


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleRole = (e) => {
        setRole(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleCpassword = (e) => {
        setCpassword(e.target.value)
    }
    const handleImg = (e) => {
        console.log(e.target.files[0])
        setImg(e.target.files[0])
    }



    const PostData = async (e) => {
        formRef.current.reportValidity()
        e.preventDefault();
        // const {name, phone, email, password, cpassword, role} = user_Data
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("cpassword", cpassword);
        formData.append("img", img);
        formData.append("role", role);
        const res = await axios.post('/signup', formData,
        {
          headers: {
            "content-type": "application/json"
          }
        })
      console.log(res.data)

        // const data = await res.json();
        // console.log(data)

        if (res.status === 422 || !res.data) {
            window.alert('Sign Up Failed')
        } else {
            window.alert('Sign Up Successfull!')
            console.log('Sign Up Successfull!')
            history('/login')
        }

    }


    return (

        <div>
            <div class="container">
                <div class="row" style={{ display: "flex", justifyContent:'center', alignItems:"center", textAlign:"center" }}>
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
                                    <Typography component="h1" variant="h5" >
                                        Sign Up Your Account
                                    </Typography>
                                    <form sx={{ mt: 3 }} ref={formRef} method="POST" encType='multipart/form-data'>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> <img id="profie_pic" src={DefaultUserPic}></img>
                                            <input
                                                style={{ margin: "1rem 0rem" }}
                                                type="file"
                                                name="img"
                                                onChange={handleImg}
                                                required
                                                placeholder='Choose Profile image'
                                            /></div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    // value={name}
                                                    onChange={handleName}
                                                    autoComplete="given-name"
                                                    name="name"
                                                    value={name}
                                                    required
                                                    fullWidth
                                                    id="firstName"
                                                    label="Full Name"
                                                    autoFocus
                                                    style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    label="Mobile Number"
                                                    name="phone"
                                                    value={phone}
                                                    type="tel"
                                                    // value={phone}
                                                    onChange={handlePhone}
                                                    autoComplete="mobile number"
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
                                            <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                                                <FormControlLabel onChange={handleRole} name="role" value="Lawyer" checked={role === 'Lawyer'} label="Lawyer" control={<Radio />} />
                                                <FormControlLabel onChange={handleRole} name="role" value="User" checked={role === 'User'} label="User" control={<Radio />} />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="password"
                                                    value={password}
                                                    label="Password"
                                                    type="password"
                                                    id="password"
                                                    // value={password}
                                                    onChange={handlePassword}
                                                    autoComplete="new-password"
                                                    style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    name="cpassword"
                                                    value={cpassword}
                                                    label="Confirm-Password"
                                                    type="password"
                                                    id="cpassword"
                                                    // value={cpassword}
                                                    onChange={handleCpassword}
                                                    autoComplete="Confirm-password"
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
                                            Sign Up
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