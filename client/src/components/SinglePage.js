import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LawyersProfile from './LawyersProfile'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const SinglePage = () => {
    return <div style={{width:"72%", margin:"4rem"}}>
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
            <h1>Consult Best Family Lawyers / Advocates in India</h1>
            <p> Whether you are filing a divorce, wanting child custody, alimony or maintenance, fighting 498a, fighting a dispute related to discord in the family, or are being harassed by your children, choose a lawyer who is an expert in family law. Use LawRato to hire a top rated family dispute lawyer in India.&nbsp; </p>
            <a href="" style={{
                    cursor: "pointer", color:" #000",
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
                    cursor: "pointer", color:" #000",
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
        <LawyersProfile/>
    </div>;
};

export default SinglePage;
