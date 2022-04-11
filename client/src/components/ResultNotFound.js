import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const ResultNotFound = () => {
    function handleClick(event) {
        event.preventDefault();
        // console.info('You clicked a breadcrumb.');
    }
    return (
        <div> <div style={{ width: "72%", margin: "2rem" }}>
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
                <h1 style={{ margin: '2rem 0rem' }}>Consult Best Lawyers, Attorneys & Legal Advisors in India</h1>
                <p>We help you to consult and hire the best lawyers in India for District Courts, High Court & Supreme Court matters. Use filters to narrow your search and find the best advocate in India for your legal matter. Get top lawyers in India for family dispute or divorce matters, property matter, employment or labor court matter, criminal matter, recovery or cheque bounce matters, taxation or corporate matters, or a lawyer expert in any other field of law.</p>
                <a href="/lawyers/search" title="Featured Lawyers" class="button button-primary">Divorce</a>
                <a style={{margin:"0rem 2rem"}} href="/lawyers/search" title="Featured Lawyers" class="button button-primary">Criminal</a>
                <a href="/lawyers/search" title="Featured Lawyers" class="button button-primary">Property</a>
                <a style={{margin:"0rem 2rem"}} href="/lawyers/search" title="Featured Lawyers" class="button button-primary">Civil</a>
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
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <div style={{ padding: "20px", margin: "35px 0", border: "1px solid #feeb64" }}>
                    <center><h3>No Results Found</h3>
                        <h2>Start a Fresh Search by Selecting from Filter Options.</h2><br/>
                            <a href="/lawyers/search" title="Featured Lawyers" class="button button-primary">View all Featured Lawyers</a>
                    </center>
                </div>

            </div>
        </div></div>
    )
}

export default ResultNotFound