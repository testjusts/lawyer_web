import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import change_languages from '../img/change_language.png'
import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';



const TopBar = () => {
  const langs = [{ label:"Hindi"}, { label:"English"}]

    return <div style={{ backgroundColor: "#f6f6f6" }}><div className="topBar">
        <div style={{}}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl>
                    {/* <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{ left:"20px", top: "-3px", display: 'flex' }}>
                        <img style={{ height: "4vh" }} src={change_languages}></img>
                    
                    </InputLabel> */}
                    <Autocomplete style={{ display: "flex", textDecoration: "none", fontSize: "14px" }}
                        lid="combo-box-demo"
                        options={langs}
                        sx={{ width: 150 }}
                        renderInput={(params) => <TextField {...params} label="Langusges"/>}
                        // onChange={(e) => setLang(e.target.value)}
                    >

                    </Autocomplete>
                </FormControl>
            </Box>
        </div>
        <div>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li style={{ margin: "0 30px", fontSize: "14px" }}><a href="/indiankanoon">Indian Kanoon</a></li>
                <li style={{ margin: "0 30px", fontSize: "14px" }}><a href="/talktolawyer">Talk to A Lawyer</a></li>
            </ul>
        </div>
    </div>
    </div>;
};

export default TopBar;
