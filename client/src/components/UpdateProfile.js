import React, { useState, Fragment, useRef, useContext, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom'
import About from '../components/About';
import Footer from '../components/Footer';
import axios from "axios"
import { UserContext } from "../App";
import { useLocation } from "react-router";
import DefaultUserPic from "../img/team-male.jpg"


const theme = createTheme();

export default function UpdateProfile() {
    const { state, dispatch } = useContext(UserContext)
    // const location = useLocation();
    const { id } = useParams()
    // console.log(id)
    // const path = location.pathname;
    // console.log(path)

    const PF = "http://localhost:5000/"
    // const uploadInputRef = useRef(null);

    const formRef = React.useRef();
    const history = useNavigate();
    // const [user, setUser] = useState("")
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
    // const [email, setEmail] = useState("")
    // const [city, setCity] = useState("")
    // const [separate_area, setSeparateArea] = useState("")
    // const [gender, setGender] = useState("")
    // const [language, setLanguage] = useState("")
    // const [experience, setExperience] = useState("")
    // const [court, setCourt] = useState("")
    // const [password, setPassword] = useState("")
    // const [cpassword, setCpassword] = useState("")
    // const [img, setImg] = useState(null)
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        city: "",
        gender: "",
        experience: "",
        language: "",
        court: "",
        separate_area: "",
        address: "",
        work: ""

    });

    const { name,
        email,
        phone,
        password,
        cpassword,
        city,
        gender,
        experience,
        language,
        court,
        separate_area, address, work } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(e.target.value)
    };

    // const handleName = (e) => {
    //     setName(e.target.value)
    //   }
    //   const handlePhone = (e) => {
    //     setPhone(e.target.value)
    //   }
    //   const handleEmail = (e) => {
    //     setEmail(e.target.value)
    //   }
    //   const handleCity = (e) => {
    //     setCity(e.target.value)
    //   }
    //   const handleCourt = (e) => {
    //     setCourt(e.target.value)
    //   }
    //   const handleGender = (e) => {
    //     setGender(e.target.value)
    //   }
    //   const handleLanguage = (e) => {
    //     setLanguage(e.target.value)
    //   }
    //   const handleSeparateArea = (e) => {
    //     setSeparateArea(e.target.value)
    //   }
    //   const handleExperience = (e) => {
    //     setExperience(e.target.value)
    //   }
    //   const handlePassword = (e) => {
    //     setPassword(e.target.value)
    //   }
    //   const handleCpassword = (e) => {
    //     setCpassword(e.target.value)
    //   }
    // const handleImg = (e) => {
    //     console.log(e.target.files[0])
    //     setImg(e.target.files[0])
    // }
    const loadUpdateProfile = async () => {
        try {
            const res = await fetch(`/signup/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            // console.log(data)
            setUser(data)
            if (!res.status === 201) {
                const error = new Error(error);
                throw error;
            }

        } catch (err) {
            // console.log(err)
            history('/login')
        }
    }
    useEffect(() => {
        loadUpdateProfile()
    }, []);


    const PostLawyer = async (e) => {
        formRef.current.reportValidity()
        e.preventDefault();
        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("phone", phone);
        // formData.append("email", email);
        // formData.append("password", password);
        // formData.append("cpassword", cpassword);
        // formData.append("img", img);
        // formData.append("city", city);
        // formData.append("gender", gender);
        // formData.append("court", court);
        // formData.append("language", language);
        // formData.append("experience", experience);
        // formData.append("separate_area", separate_area);
        console.log(user.role)

        const res = await fetch(`/signup/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, phone, password, cpassword, email, gender, city, experience, language, court, separate_area })
            })
        // console.log(res)
        const data = await res.json();
        // console.log(data)
        setUser(data)

        if (res.status === 422) {
            window.alert('Update Failed!')
        } else {
            window.alert('Update Successful!')
            console.log('Update Successful!')
        }

    }
    const PostUser = async (e) => {
        formRef.current.reportValidity()
        e.preventDefault();
        console.log(user.role)

        const res = await fetch(`/signup/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, phone, password, cpassword, email, gender, language, work, address })
            })
        // console.log(res)
        const data = await res.json();
        // console.log(data)
        setUser(data)

        if (res.status === 422) {
            window.alert('Update Failed!')
        } else {
            window.alert('Update Successful!')
            console.log('Update Successful!')
        }

    }

    return (<>
        <section class="service-hero hidden-xs" style={{ background: "red", backgroundSize: "cover", marginBottom: "0px", marginLeft: "-1px" }}>
            <div class="container">
                <div class="row" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                                    <Typography component="h1" variant="h5">
                                        Update Profile
                                    </Typography>

                                    <form sx={{ mt: 3 }} ref={formRef} method="PUT">
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}> <img id="profie_pic" style={{ margin: "1rem 0rem", width: "35%", height: "25vh", borderRadius: "50px" }} src={PF + user.img}></img><h2 style={{ margin: "1rem", color: "#00ff72" }}>You are {user.role}!</h2>
                                        </div>
                                        {/* <InputShow /> */}
                                        {(user.role === 'Lawyer') ? (
                                                         <><Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        // value={name}
                                                        onChange={onInputChange}
                                                        autoComplete="given-name"
                                                        name="name"
                                                        value={user.name}
                                                        required
                                                        fullWidth
                                                        id="firstName"
                                                        label="Full Name"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="lastName"
                                                        label="Mobile Number"
                                                        name="phone"
                                                        value={user.phone}
                                                        type="tel"
                                                        // value={phone}
                                                        onChange={onInputChange}
                                                        autoComplete="mobile number"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        type="email"
                                                        label="Email Address"
                                                        name="email"
                                                        value={user.email}
                                                        onChange={onInputChange}
                                                        autoComplete="email"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="City"
                                                        type="text"
                                                        name="city"
                                                        value={user.city}
                                                        onChange={onInputChange}
                                                        autoComplete="city"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        type="text"
                                                        label="Practice Area"
                                                        name="separate_area"
                                                        value={user.separate_area}
                                                        onChange={onInputChange}
                                                        autoComplete="practice Area"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        type="text"
                                                        label="Court"
                                                        name="court"
                                                        value={user.court}
                                                        onChange={onInputChange}
                                                        autoComplete="court"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        type="number"
                                                        label="Experience"
                                                        name="experience"
                                                        value={user.experience}
                                                        onChange={onInputChange}
                                                        autoComplete="experience"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Language"
                                                        name="language"
                                                        type="text"
                                                        value={user.language}
                                                        onChange={onInputChange}
                                                        autoComplete="Language"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Gender"
                                                        name="gender"
                                                        type="text"
                                                        value={user.gender}
                                                        onChange={onInputChange}
                                                        autoComplete="Gender"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        value={user.password}
                                                        onChange={onInputChange}
                                                        autoComplete="new-password"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="cpassword"
                                                        label="Confirm-Password"
                                                        type="password"
                                                        id="cpassword"
                                                        value={user.cpassword}
                                                        onChange={onInputChange}
                                                        autoComplete="Confirm-password"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>

                                            </Grid><Button
                                                onClick={PostLawyer}
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                    Update
                                                </Button></>

                                        ) : (<><Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        // value={name}
                                                        onChange={onInputChange}
                                                        autoComplete="given-name"
                                                        name="name"
                                                        value={user.name}
                                                        onkeydown={true}
                                                        required
                                                        fullWidth
                                                        focused
                                                        id="firstName"
                                                        label="Full Name"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="lastName"
                                                        label="Mobile Number"
                                                        name="phone"
                                                        value={user.phone}
                                                        type="tel"
                                                        // value={phone}
                                                        onChange={onInputChange}
                                                        autoComplete="mobile number"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        type="email"
                                                        label="Email Address"
                                                        name="email"
                                                        value={user.email}
                                                        onChange={onInputChange}
                                                        autoComplete="email"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Gender"
                                                        name="gender"
                                                        type="text"
                                                        value={user.gender}
                                                        onChange={onInputChange}
                                                        autoComplete="Gender"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>

                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Language"
                                                        name="language"
                                                        type="text"
                                                        value={user.language}
                                                        onChange={onInputChange}
                                                        autoComplete="Language"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        label="Work"
                                                        type="text"
                                                        name="work"
                                                        value={user.work}
                                                        onChange={onInputChange}
                                                        autoComplete="work"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        type="text"
                                                        label="Address"
                                                        name="address"
                                                        value={user.address}
                                                        onChange={onInputChange}
                                                        autoComplete="address"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        value={user.password}
                                                        onChange={onInputChange}
                                                        autoComplete="new-password"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="cpassword"
                                                        label="Confirm-Password"
                                                        type="password"
                                                        id="cpassword"
                                                        value={user.cpassword}
                                                        onChange={onInputChange}
                                                        autoComplete="Confirm-password"
                                                        style={{ backgroundColor: "white", border: "1px solid #d3d3d3" }} />
                                                </Grid>
                                            </Grid><Button
                                                onClick={PostUser}
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                    Update
                                                </Button></>
                                        )}
                                    </form>
                                </Box>
                            </Container>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </section>
        <About />
        <Footer />
    </>
    )
}

