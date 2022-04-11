import React, { useState, Fragment, useRef, createContext } from 'react';
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
import { Link, useNavigate } from 'react-router-dom'
import About from '../components/About';
import Footer from '../components/Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import DefaultUserPic from "../img/team-male.jpg"

// const data = createContext();

const theme = createTheme();

export default function SignUp(props) {
  const PF = "http://localhost:5000/"
  // const uploadInputRef = useRef(null);
  const formRef = React.useRef();
  const history = useNavigate();
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [img, setImg] = useState("")


  // let name, value;
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("cpassword", cpassword);
    formData.append("img", img);

    const res = await axios.post('/signup', formData,
      {
        headers: {
          "content-type": "application/json"
        }
      })
    console.log(res)

    // const data = await res.json();
    // console.log(data)

    if (res.status === 422 || !res.data) {
      window.alert('Update Failed')
    } else {
      window.alert('Update Successfull!')
      console.log('Update Successfull!')
      history('/login')
    }

  }


  return (

    <div>
      <section class="service-hero hidden-xs" style={{ background: "url('https://lawrato.com/assets/images/LawRato_SignUp_Bg.jpg')", backgroundSize: "cover", marginBottom: "0px", marginLeft: "-1px" }}>
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <div class="col-sm-7">
              <br />
              <h1 style={{ marginTop: "8rem" }}>10,000 Lawyers<br />are helping 15 Lac users<br />every month at LawRato</h1><br />
              <h2 style={{ color: "#FFF" }}>Join India's leading lawyer network<br />and grow your practice</h2>
            </div>
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
                      Sign Up for free
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
                            // value={email}
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
      </section>
      <section id="home-quick-menu" class="text-center quick-menu border-bottom-default">
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <div class="col-sm-4">
              <div class="media text-left">
                <span class="media-left media-middle">
                  <img class="media-object" src={'https://lawrato.com/assets/img/sprite/icon/suitcase-large-icon.png'} alt="Image" />
                </span>
                <span class="media-body">
                  <h4 class="media-heading">Build Online Brand</h4>
                  <p>Showcase your expertise, capabilities and achievements in the legal field.</p>
                </span>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="media text-left">
                <span class="media-left media-middle">
                  <img class="media-object" src="https://lawrato.com/assets/img/sprite/icon/finger-point-large-icon.png" alt="Image" />
                </span>
                <span class="media-body">
                  <h4 class="media-heading">Reach More Clients</h4>
                  <p>Increase your business prospects by getting in front of new potential clients.</p>
                </span>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="media text-left">
                <span class="media-left media-middle">
                  <img class="media-object" src="	https://lawrato.com/assets/img/sprite/icon/discuss-large-icon.png" alt="Image" />
                </span>
                <span class="media-body">
                  <h4 class="media-heading">Grow Your Reputation</h4>
                  <p>Answer legal questions and stand out among the rest.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="guide-detail" class="guide-detail two-cols">
        <div class="container">
          <div class="row">
            <br /><br />
            <div class="col-sm-12">
              <h3>We do not endorse any lawyer, nor do we allow any sort of marketing/advertisement activity on our platform.</h3>
              <p>We follow multi level verification which includes online, social and offline tracking along with reference checks as a part of our onboarding process. You may get a call / email shortly from us post submission of your details.<br /><br />
              </p>
            </div>
            <div class="row hidden-xs">
              <div class="col-sm-12">
                <div class="col-sm-6">
                  <div class="block-card" style={{ height: "14em" }}>
                    <h3>India's preferred lawyer platform</h3>
                    <p>Over 1000 clients get legal assistance every day at LawRato. Join India's leading lawyer platform - with 50000+ visitors and 1000+ legal inquiries each day, we take pride in being the preferred destination for all legal support in India.</p>

                  </div>
                </div>
                <div class="col-sm-6">
                  <div class=" block-card" style={{ height: "14em" }}>
                    <h3>Be where the best are</h3>
                    <p>Rub shoulders with the best in the legal sector in India. As we are very selective in onboarding top rated lawyers in the country at LawRato, joining the platform gives you immediate access to network with the best lawyers in India.</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="row visible-xs">
              <div class="col-sm-12">
                <div class="col-sm-6">
                  <div class="block-card">
                    <h3>India's preferred lawyer platform</h3>
                    <p>Over 1000 clients get legal assistance every day at LawRato. Join India's leading lawyer platform - with 25000+ visitors and 1000+ legal inquiries each day, we take pride in being the preferred destination for all legal support in India.</p>

                  </div>
                </div>
                <div class="col-sm-6">
                  <div class=" block-card">
                    <h3>Be where the best are</h3>
                    <p>Rub shoulders with the best in the legal sector in India. As we are very selective in onboarding top rated lawyers in the country at LawRato, joining the platform gives you immediate access to network with the best lawyers in India.</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <br /><br />
            <div class="col-sm-12" style={{ marginTop: "3rem", marginBottom: "2.5rem" }}>
              <h2>Frequently Asked Questions</h2>
              <br />
              <div style={{}}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>What is LawRato?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      LawRato is India's leading legal advice and lawyer search platform! We are a curated online marketplace that connects our network of high-quality lawyers with business clients. We provide a one-stop platform to ask, answer, discuss legal questions, and from time to time, we even post legal updates and news for those of you who can't get enough of law-related newsbytes!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Can listing myself with LawRato?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      By using LawRato, the lawyers on our platform also do not advertise nor solicit business from potential clients. In fact, what is unique about LawRato is that clients themselves post their queries or come with their cases on our platform looking for lawyers. Ultimately, the client determines who he/she wishes to engage as his/her lawyer.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>How does LawRato work?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Well, it's as easy as 1-2-3
                      1. The law-seeker searches and selects the Lawyer based on the client's specific legal need's The law-seeker can search by Specialization, City or Court Name.
                      2. The law-seeker fills up the ‘contact lawyer’ form on the lawyer profile page.
                      3. We share lawyer’s contact details with the law-seeker and the law-seeker contact details with the lawyer through the LawRato Partner App.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Is LawRato a law firm?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, LawRato is not a law firm. We are a neutral and transparent legal tech platform that connects our network of high-quality lawyers with business clients. LawRato does not entertain and take up any client matter directly.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Is LawRato a law firm?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, LawRato is not a law firm. We are a neutral and transparent legal tech platform that connects our network of high-quality lawyers with business clients. LawRato does not entertain and take up any client matter directly.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ marginTop: "2rem" }}> <b>Didn't find your answer?</b><br />
                Contact our Partner Support team at <b>partner@lawrato.com</b> or call us at 8750900555.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div align="center" style={{ marginBottom: "1rem" }}>
        <a href="https://lawrato.com/lawyer-signup"><button class="button button-primary">Signup Now</button></a>
      </div>
      <About />
      <Footer />
    </div>
  )
}
// export { data };