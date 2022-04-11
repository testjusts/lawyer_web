import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import About from './About'
import Footer from './Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const TalkToLawyer = () => {
  const cities = [
    { label: 'Delhi' },
    { label: 'Noida' },
    { label: 'Gurgaon' },
]
  return (
    <div>
      <div role="presentation" onClick={handleClick} className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started/installation/"
          >
            Demopage
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <section id="guide-detail" className="guide-detail two-cols">
        <div className="containerTalkToLawyer">
          <div className="row">
            <div className="col-sm-12">
              <h1>Talk to a Lawyer</h1>
              <h4 className="talktolawyer_heading">Just fill in your details to immediately get the best matched lawyers for legal issues. Every lawyer profile has been verified, and you can contact them within minutes.</h4><br />
            </div>
            <div style={{}}>
              <div className="col-sm-8">
                <div className="content-left">
                  <div className="block-card">
                    <div className="filter-wrapper rq-category-select">
                      <div className="field">
                        <input style={{ marginBottom: "0px" }} type="text" name="your_name" id="your_name" className="input-text form-control" maxlength="50" placeholder="Your Name" value="" />
                        <br /> <br />
                      </div>
                      <div className="field">
                        <input style={{ marginBottom: "0px" }} type="text" name="your_phone" id="your_phone" className="input-text form-control" maxlength="14" placeholder="Mobile Number" value="" />
                        <br />
                        <br />
                      </div>
                      <div className="field">
                        <input style={{ marginBottom: "0px" }} type="email" name="your_email" id="your_email" className="input-text form-control" maxlength="50" placeholder="Your Email" value="" />
                        <br /> <br />
                      </div>
                      <div className="field">
                        <select name="your_city1" id="your_city1" className="select-form selectized" tabindex="-1" style={{ display: "none" }}></select><div className="selectize-control select-form single">

                        <form method="POST">
                        <Autocomplete
                        
                            id="country-select-demo"
                            sx={{ width: '100%', border:"1px solid #d3d3d3"}}
                            options={cities}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    {option.label}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select City where need you lawyer"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />

                    </form>
                      <div className="selectize-dropdown-content"></div></div></div>
                    </div>
                    <br /><br />
                    <p>I agree to <a target="_blank" href="https://lawrato.com/cmses/page/terms-of-use"><strong>LawRato's terms of use</strong></a></p>
                    <br />
                    <br />
                    <button type="submit" name="askafree" id="addquestionnew" className="button button-primary" value="Submit"
                    >Find Lawyers</button>
                  </div>

                </div>
              </div>
              <div className="col-sm-4">
                <div className="content-right">
                  <div className="block-item">
                    <div className="block-card extra">
                      <div className="card">
                        <h4 className="card-title" style={{ fontWeight: "bold" }} t><img src="https://lawrato.com/assets/images/icons/Icons-16.svg" style={{ width: "30px" }} />&nbsp;&nbsp;&nbsp;What are others saying?</h4>
                        <div className="card-desc">“I got a call from LawRato’s case manager within minutes and they connected me to a top lawyer instantly. It was never so easy to find the right lawyer"</div>
                        <div class="cta-product">
                          <b>- Ajay R</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-item">
                    <div className="block-card extra">
                      <div className="card">
                        <h4 className="card-title" style={{ fontWeight: "bold" }}><img src="https://lawrato.com/assets/images/icons/Icons-18.svg" style={{ width: "30px" }} />&nbsp;&nbsp;&nbsp;Talk to a top rated lawyer</h4>
                        <div className="card-desc">Contact a top rated lawyer in your city to get detailed opinion on your legal problem.</div>
                        <div className="cta-product">
                          <a href="https://lawrato.com/lawyers" className="button button-primary">Find a Lawyer</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2>Get Legal Advice Over the Phone</h2>
              <br />
              <p>
                Going through a divorce? Launching a business? Hurt in a car accident? Writing a will? Facing a lawsuit? In any of these situations, you may consider hiring a lawyer to advise you or represent your interests. While each state has many lawyers to choose from, choosing the right lawyer can make the difference between a pleasant and a frustrating experience. The phone advice received from legal experts can make one understand the intricacies involved in a particular case and can help the party understand his or her legal journey.
                <br /><br />
                It's important to understand that a good lawyer doesn't guarantee that you'll win your case. However, having a good lawyer will give you the best chances for a favorable outcome and the comfort of knowing that you had the best legal representation. The first step in hiring a lawyer is choosing one in the practice area that is related to your legal matter because this will ensure that the lawyer is well versed in cases similar to yours.
                <br /><br />
                LawRato.com makes it easier for you to get legal advice from Top Rated Lawyers across the country. Discuss your legal issue over phone, email, schedule an office meeting, or consult with any of the listed Lawyers at your home / office. We are ready to help you, as per your convenience.
                <br /><br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <br />
              <h2>Frequently Asked Questions</h2>
              <br />
              <p>
                <b>What happens after I choose “Talk to a Lawyer"?</b><br />
                A LawRato representative will get in touch with you, understand your need and will identify which lawyers in our network can assist you. <br /><br />
                <b>When I use “Talk to a Lawyer" service, is that information private?</b><br />
                Yes. Your request is private. However, it is not a confidential communication between you and your lawyer, and therefore is not covered by Attorney-Client privilege. This means you should not include any information in your request that you would only feel comfortable sharing with the lawyer you end up working with. Confidentiality matters, so please err on the side of caution when you fill out the information to “Talk to a Lawyer”.<br /><br />
                <b>How do I Search a lawyer?</b><br />
                If you are looking for a lawyer, you can start by clicking on find a lawyer at the top of the page. This will take you to the Find a Lawyer page, where you can search based on expertise, location and a few other criteria like years of experience, gender, languages spoken, etc. Expertise helps you find lawyers that are suitable for your requirement and location mentions where they practice.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
export default TalkToLawyer;