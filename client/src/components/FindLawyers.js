import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FindLawyers() {
    const [value, setValue] = React.useState(0);
    const [search, setSearch] = useState([]);
    // const [record, setRecord] = useState([]);

    // For loading reacord on Window Load
    const loadRecords = async () => {
        const res = await axios.get("/signup/")
        console.log(res.data)
        setSearch(res.data)
    }
    useEffect(() => {
        loadRecords();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="findlawyers findlawyers_all" >
            <div style={{ margin: "3rem 0rem" }}>
                <h2>Find Lawyers by</h2>
            </div>
            <Box sx={{ width: '100%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid #ddd", backgroundColor: "#f2f2f2" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ backgroundColor: "#fafafa" }}>
                        <Tab label="City" {...a11yProps(0)} />
                        <Tab className="tab_menu" label="Practice" {...a11yProps(1)} />
                        <Tab label="Court" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <div className="tabDirection">
                {search && search.map((tab, i) => (
                    <TabPanel value={value} index={0} style={{ display: "flex" }}>
                        <a key={i} style={{ textDecoration: "none", display: "flex" }} href="#"><span><img src={"https://lawrato.com/assets/img/sprite/icon/marker-small-icon.png"}/> </span>{tab.city}</a>
                    </TabPanel>
                ))}
                {search && search.map((tab, i) => (
                    <TabPanel value={value} index={1} style={{ display: "flex" }}>
                        <a key={i} style={{ textDecoration: "none", display: "flex" }} href="#"><span><img src={"https://lawrato.com/assets/img/lit.png"}/> </span>{tab.court}</a>
                    </TabPanel>
                ))}
                {search && search.map((tab, i) => (
                    <TabPanel  value={value} index={2} style={{ display: "flex" }}>
                        <a key={i} style={{ textDecoration: "none", display: "flex" }} href="#"><span><img style={{ verticalAlign: "middle" }} src={"https://lawrato.com/assets/img/sprite/icon/court-small-icon.png"} /></span>{tab.separate_area}</a>
                    </TabPanel>
                ))}
                </div>

                <center><a style={{ marginTop: "20px", backgroundColor: "#2196f3", color: "#fff", border: "1px solid #2196f3", marginTop: "20px", display: "inline-block", fontWeight: "700", padding: "10px 20px", textDecoration: "none", lineHeight: "1.42857143", marginBottom: "20px" }} href="/lawyers/search">Search in Other Practice Areas</a></center>
            </Box>
        </div>
    );
}