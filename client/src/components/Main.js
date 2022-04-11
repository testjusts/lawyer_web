import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import SidebarRND from './SidebarRND';
import { Route, Routes } from 'react-router-dom';

const Main = () => {

    const [search, setSearch] = useState([]);
    const [previos, setPrevios] = useState([]);
    // const [record, setRecord] = useState([]);
    const history = useNavigate();
    const loadRecords = async () => {
        const res = await axios.get("/signup/")
        // console.log(res.data)
        setSearch(res.data)
        setPrevios(res.data)
    }
    useEffect(() => {
        loadRecords();
    }, []);


    // Search Item by Individual field:
    const searchRecords = (e) => {
        setSearch(search);
        e.preventDefault();
        history('/lawyers/search')
        // console.log("=======t=====",search)

    }

    const newCity = [[...new Set(previos.map((k) => k.city))]]
    const newSeparate_Area = [[...new Set(previos.map((k) => k.separate_area))]]


    // const PostSearch = async (e) => {
    //     e.preventDefault();
    //     history('/lawyers')
    // }


    return <div>
        <div style={{
            display: "flex", flexDirection: "column", backgroundImage: "url(	https://lawrato.com/assets/img/background/homepage-banner-v2-plain.jpg)", backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', justifyContent: "center", alignItems: "center", color: "white", top:"1rem"
        }}>
            <h1 className="main_heading">Free Legal Advice Online <br />
                From Top Rated Lawyers</h1>
            <p className="main_para">Choose from over 10,000 lawyers across 700+ cities in India</p>
            <div className="main_btns">
                <button style={{ padding: "15px 20px", marginRight: "25px", color: "#2196f3", backgroundColor: "white", border: "1px solid #2196f3", fontWeight: "700", fontSize: "14px", lineHeight: "1.42857143" }}>TALK TO A LAWYER</button>
                <button style={{ padding: "15px 20px", color: "#2196f3", backgroundColor: "#00000003", color: "white", border: "1px solid white", fontWeight: "700", fontSize: "14px", lineHeight: "1.42857143" }}>TALK TO A LAWYER</button>
            </div>
        </div>
        <div style={{ backgroundColor: "#f2f2f2", marginTop: "-20px", display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center", padding: "30px 0px" }}>
            <h2 style={{ paddingBottom: "10px", paddingTop: "30px" }}>Search for top-rated lawyers</h2>
            <div className="main_searchBoxes">
                <div className="searchBox">
                    <Autocomplete
                        // onChange={handleCity}
                        disablePortal
                        id="combo-box-demo"
                        sx={{ width: 200, backgroundColor: "white", margin: ".5rem .5rem" }}
                        options={newCity[0]}
                        renderInput={(params) => <TextField {...params} label="Select City" />}
                    />

                    <Autocomplete
                        // onChange={handleSeparateArea}
                        id="country-select-demo"
                        sx={{ width: 200, backgroundColor: "white", margin: ".5rem .5rem" }}
                        options={newSeparate_Area[0]}
                        autoHighlight
                        renderInput={(params) => <TextField {...params} label="Select Practice Area" />}
                    />
                </div>
                {/* <button style={{ border: "1px solid #2196f3", backgroundColor: "#2196f3", color: "#fff", fontSize: "14px", padding: "10px 20px", lineHeight: "1.42857143", margin: "14px 0px" }} type='submit' onClick={searchRecords}>Search</button> */}
                <a style={{ border: "1px solid #2196f3", backgroundColor: "#2196f3", color: "#fff", fontSize: "14px", padding: "10px 20px", lineHeight: "1.42857143", margin: "14px 5px" }} type='submit' target='_blank' onClick={searchRecords}>Search</a>

            </div>
        </div>
    </div>;
};

export default Main;
