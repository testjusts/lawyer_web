import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Search from '@mui/icons-material/Search';
import { SliderUnstyled } from '@mui/base';

const SidebarRND = () => {
    const PF = "http://localhost:5000/"
    const [search, setSearch] = useState([]);
    // const [record, setRecord] = useState([]);

    // For loading reacord on Window Load
    const loadRecords = async () => {
        const res = await axios.get("/signup/")
        const overallCity = res.data.map((k) => (k.city))
        console.log(res.data.pop(overallCity))

        if (!overallCity) {
            setSearch(res.data.pop(res.data.pop(overallCity)))
        } else {
            setSearch(res.data)
        }
    }
    useEffect(() => {
        loadRecords();
    }, []);

    console.log("=======t=====", search)

    // console.log('*******t*****', previos)

    // Search Item by Individual field:
    const searchRecords = () => {
        setSearch(search);
        // console.log("=======t=====", search)

    }

    const Reset = () => {
        axios.get(`/signup/`)
            .then(response => {
                setSearch(response.data);
            });

    }

    const newCity = [[...new Set(search.map((k) => k.city))]]
    // console.log(newCity[0])
    const newSeparate_Area = [[...new Set(search.map((k) => k.separate_area))]]
    const newCourt = [[...new Set(search.map((k) => k.court))]]
    const newExp = [[...new Set(search.map((k) => k.experience))]]
    const newLang = [[...new Set(search.map((k) => k.language))]]
    const newGender = [[...new Set(search.map((k) => k.gender))]]
    // const newRating = [[...new Set(previos.map((k) => k.rating))]]

    const handleCity = (e, value) => {
        // setRecord(value);
        console.log(typeof value.lenght)
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.city === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }

    const handleSeparateArea = (e, value) => {
        // setRecord(value);
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.separate_area === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }

    const handleCourt = (e, value) => {
        // setRecord(value);
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.court === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }

    const handleExp = (e, value) => {
        // setRecord(value);
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.experience === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }
    const handleLang = (e, value) => {
        // setRecord(value);
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.language === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }
    const handleGender = (e, value) => {
        // setRecord(value);
        if (value.length === "undefined") {
            return setSearch(search)
        }
        var newValue = []
        // console.log(value,value.length)
        for (let i = 0; i < value.length; i++) {
            const tempValue = search.filter(item => item.gender === value[i])
            // console.log(tempValue)
            tempValue.map(t => newValue.push(t))
        }
        setSearch(newValue)
        // console.log(newValue,"new")
    }
    // const handleRating = (e, value) => {
    //     // setRecord(value);
    //     if (value.length === 0) {
    //         return setSearch(previos)
    //     }
    //     var newValue = []
    //     // console.log(value,value.length)
    //     for (let i = 0; i < value.length; i++) {
    //         const tempValue = previos.filter(item => item.rating === value[i])
    //         // console.log(tempValue)
    //         tempValue.map(t => newValue.push(t))
    //     }
    //     setSearch(newValue)
    //     // console.log(newValue,"new")
    // }




    // console.log(newData)

    function handleClick(event) {
        event.preventDefault();
        // console.info('You clicked a breadcrumb.');
    }

    // var cityName = previos.filter(item => item.city)


    return <div className="entire_sidebarRND">
        <div className='sidebar'>
            <div style={{ marginTop: "-20px", display: 'flex', flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center", padding: "30px 0px" }}>
                <h2 style={{ paddingBottom: "10px", paddingTop: "30px" }}>Search</h2>
                <div className="sidebar_search">
                    <div>
                        <Autocomplete
                            multiple
                            onChange={handleCity}
                            disablePortal
                            id="combo-box-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newCity[0]}
                            // getOptionSelected={(option, value) => option.city === value.city}
                            renderInput={(params) => <TextField {...params} label="Select City" />}
                        />

                        <Autocomplete
                            multiple
                            onChange={handleSeparateArea}
                            id="country-select-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newSeparate_Area[0]}
                            autoHighlight
                            renderInput={(params) => <TextField {...params} label="Select Practice Area" />}
                        />
                        <Autocomplete
                            multiple
                            onChange={handleCourt}
                            id="country-select-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newCourt[0]}
                            autoHighlight
                            renderInput={(params) => <TextField {...params} label="Select Courts" />}
                        />
                        <Autocomplete
                            multiple
                            onChange={handleExp}
                            id="country-select-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newExp[0]}
                            autoHighlight
                            renderInput={(params) => <TextField {...params} label="Select Experience" />}
                        />
                        <Autocomplete
                            multiple
                            onChange={handleLang}
                            id="country-select-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newLang[0]}
                            autoHighlight
                            renderInput={(params) => <TextField {...params} label="Select Language" />}
                        />
                        <Autocomplete
                            multiple
                            onChange={handleGender}
                            id="country-select-demo"
                            sx={{ width: 200, backgroundColor: "white", margin: ".5rem 2rem" }}
                            options={newGender[0]}
                            autoHighlight
                            renderInput={(params) => <TextField {...params} label="Select Gender" />}
                        />
                    </div>
                    {/* <button style={{ border: "1px solid #2196f3", backgroundColor: "#2196f3", color: "#fff", fontSize: "14px", padding: "10px 20px", lineHeight: "1.42857143", margin: "14px 0px" }} type='submit' onClick={searchRecords}>Search</button> */}
                    <button style={{ border: "1px solid #2196f3", backgroundColor: "red", color: "#fff", fontSize: "14px", padding: "10px 20px", lineHeight: "1.42857143", margin: "14px 0px" }} type='submit' onClick={Reset}>Reset</button>

                </div>
            </div>
        </div>
        <div className="sidebarRND_hero">
            <div role="presentation" onClick={handleClick}>
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
            <div style={{}}>
                <h1 style={{ margin: '2rem 0rem', lineHeight:"40px" }}>Consult Best Lawyers / Advocates in India</h1>
                <p> Whether you are filing a divorce, wanting child custody, alimony or maintenance, fighting 498a, fighting a dispute related to discord in the family, or are being harassed by your children, choose a lawyer who is an expert in family law. Use LawRato to hire a top rated family dispute lawyer in India.&nbsp; </p>
                <a href="" style={{
                    cursor: "pointer", color: " #000",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    paddingBottom: " 0",
                    borderBottom: "1px solid #2196f3",
                    display: "inline-block",
                    fontSize: "14px",
                    textDecoration: "none"
                }} >READ MORE</a>
                <div class="hidden-xs" style={{ float: "right" }}>
                    <a style={{
                        cursor: "pointer", color: " #000",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        paddingBottom: " 0",
                        borderBottom: "1px solid #2196f3",
                        display: "inline-block",
                        fontSize: "14px",
                        textDecoration: "none"
                    }}><img src={"https://lawrato.com/assets/img/sprite/icon/map-marker-icon.png"} /> Lawyers near me &gt;&gt;</a>
                    <p id="demo" style={{ color: "red" }}></p>
                </div>
            </div>
            <div className="sidebar_card">
                {search && search.map((tab, idx) => (<div key={idx} style={{ padding: "20px", margin: "35px 0", border: "1px solid #feeb64" }}>
                    <div style={{ marginRight: "-15px", marginLeft: " -15px" }}>
                        <div style={{
                            width: "58.33333333%", float: "left", position: "relative",
                            minHeight: " 1px",
                            paddingRight: " 15px",
                            paddingLeft: "15px"
                        }}>
                            <div style={{ margin: "0", overflow: " hidden", zoom: " 1" }}>
                                <div style={{ float: "left", paddingRight: "20px" }}>

                                    <a href="#" title="Advocate Sudershani Ray">
                                        <img class="media-object media-object_img" src={PF + tab.img} />
                                    </a>

                                </div>
                                <div style={{
                                    display: "table-cell",
                                    verticalAlign: " top",
                                    width: "10000px",
                                    overflow: "hidden",
                                    zoom: "1"
                                }}>
                                    <div>
                                        <a style={{ textDecoration: "none" }} href="https://lawrato.com/advocate-sudershani-ray" title="Advocate Sudershani Ray">
                                            <h2 style={{ lineHeight: "1.1", color: " #000", marginBottom: "10px", fontWeight: " 600", fontSize: "16px", display: "block", marginTop: " 0" }}>{tab.name}</h2></a>
                                        <div style={{ marginBottom: "10px", lineHeight: "22px" }}><img style={{
                                            verticalAlign: " middle",
                                            marginRight: "12px", display: "inline-block"
                                        }} src={"https://lawrato.com/assets/img/sprite/icon/map-marker-icon.png"} /><span>{tab.city}</span> </div>
                                        <div style={{ marginBottom: "10px", lineHeight: "22px" }}><img style={{
                                            verticalAlign: " middle",
                                            marginRight: "12px", display: "inline-block"
                                        }} src={"https://lawrato.com/assets/img/sprite/icon/suitcase-icon.png"} /><span>{tab.experience} years Experience</span></div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-sm-5 alpha hidden-xs">
                            <div style={{ lineHeight: "22px", marginBottom: "10px" }}>
                                <span style={{ position: " relative" }}>
                                    <img style={{ marginRight: "5px" }} src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png" alt="LawRato" />
                                    <img style={{ marginRight: "5px" }} src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png" alt="LawRato" /><img style={{ marginRight: "5px" }} src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png" alt="LawRato" /><img style={{ marginRight: "5px" }} src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png" alt="LawRato" /><img style={{ marginRight: "5px" }} src="https://lawrato.com/assets/img/sprite/icon/rating-star-half-icon.png" alt="LawRato" /></span>
                                <span>
                                    {tab.rating} |
                                    100+ user ratings</span>
                            </div>
                            <div style={{ fontSize: " 13px", letterSpacing: "-0.5px" }}>
                                <strong style={{ fontSize: "14px", fontWeight: "700" }}>Practice area &amp; skills</strong>
                                <div>{tab.separate_area} + 3 More</div>
                                <div style={{ marginTop: "10px" }}>
                                    <a href="https://lawrato.com/advocate-sudershani-ray" style={{
                                        padding: "5px 25px", background: "#2196f3",
                                        color: " #fff",
                                        border: "1px solid #2196f3", display: "inline-block", fontWeight: "700", lineHeight: "1.42857143", fontSize: "14px", textDecoration: "none"
                                    }}>CONTACT NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))
                }

                <Stack spacing={2}>
                    <Pagination count={2} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </div>
    </div>;
};

export default SidebarRND;
