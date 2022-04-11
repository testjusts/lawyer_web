import React, { useState, useEffect } from 'react';
import axios from "axios"

const Footer = () => {
    const [previos, setPrevios] = useState([])
    const loadRecords = async () => {
        const res = await axios.get("/signup/")
        // console.log(res.data)
        setPrevios(res.data)
    }
    useEffect(() => {
        loadRecords();
    }, []);
    return <>
        <div style={{ backgroundColor: "black", marginTop: "-3rem" }}>
            <div style={{ margin: "40px 0px" }}>
                <div className="footer_first">
                    <div className='footer_my'>
                        <div style={{ width: "25%", float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                            <span style={{ fontSize: "16px", color: "#fff", textTransform: "uppercase", lineHeight: "30px", fontWeight: "700", position: "relative" }}>Lawyers in India</span>
                            <hr style={{
                                maxWidth: "124px", border: "5px solid #2196f3", display: "block", borderBottom: "0", marginTop: "10px", marginLeft: "0px"
                            }} />
                            <ul style={{ marginTop: "25px", paddingLeft: " 0", listStyle: "none", marginBottom: "0" }}>
                                {previos.length > 0 && previos.map((tab, idx) => (
                                    <li key={idx}><a style={{ color: " #959595", lineHeight: "36px" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">{tab.separate_area} Lawyers</a></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ width: "25%", float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                            <span style={{ fontSize: "16px", color: "#fff", textTransform: "uppercase", lineHeight: "30px", fontWeight: "700", position: "relative" }}>Lawyers in India</span>
                            <hr style={{
                                maxWidth: "124px", border: "5px solid #2196f3", display: "block", borderBottom: "0", marginTop: "10px", marginLeft: "0px"
                            }} />
                            <ul style={{ marginTop: "25px", paddingLeft: " 0", listStyle: "none", marginBottom: "0" }}>
                                {previos.length > 0 && previos.map((tab, idx) => (
                                    <li key={idx}><a style={{ color: " #959595", lineHeight: "36px" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">{tab.city} Lawyers</a></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ width: "25%", float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                            <span style={{ fontSize: "16px", color: "#fff", textTransform: "uppercase", lineHeight: "30px", fontWeight: "700", position: "relative" }}>LEGAL ADVICE</span>
                            <hr style={{
                                maxWidth: "124px", border: "5px solid #2196f3", display: "block", borderBottom: "0", marginTop: "10px", marginLeft: "0px"
                            }} />
                            <ul style={{ marginTop: "25px", paddingLeft: " 0", listStyle: "none", marginBottom: "0" }}>
                                {previos.length > 0 && previos.map((tab, idx) => (
                                    <li key={idx}><a style={{ color: " #959595", lineHeight: "36px" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">{tab.separate_area}  Advice</a></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ width: "25%", float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                            <span style={{ fontSize: "16px", color: "#fff", textTransform: "uppercase", lineHeight: "30px", fontWeight: "700", position: "relative" }}>LAW GUIDES</span>
                            <hr style={{
                                maxWidth: "124px", border: "5px solid #2196f3", display: "block", borderBottom: "0", marginTop: "10px", marginLeft: "0px"
                            }} />
                            <ul style={{ marginTop: "25px", paddingLeft: " 0", listStyle: "none", marginBottom: "0" }}>
                                {previos.length > 0 && previos.map((tab, idx) => (
                                    <li key={idx}><a style={{ color: " #959595", lineHeight: "36px" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">{tab.separate_area} Law</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-nav">
                <div style={{ display: "table", content: 'none', boxSizing: "border-box", backgroundColor: "red", margin: "rem" }}></div>
            </div>
            <div className="footer_forth" >
                <div style={{ display: "table", content: 'none', boxSizing: "border-box", backgroundColor: "red" }}></div>
                <div className="footer_sec">
                    <div className='footer_hero'>
                        <div className="footer_third">
                            <div style={{ float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                                <ul style={{ listStyle: "none", marginLeft: "-20px", paddingLeft: "0", marginBottom: "0", marginTop: "0", display: "flex", flexDirection: "column" }}>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">About Us</a></li>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Contact Us</a></li>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div style={{ float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                                <ul style={{ display: "flex", flexDirection: "column", listStyle: "none", marginLeft: "-20px", paddingLeft: "0", marginBottom: "0", marginTop: "0" }}>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Free Legal Advice</a></li>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Free Legal Advice</a></li>
                                    <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Free Legal Advice</a></li>
                                </ul>
                            </div>
                            <div style={{ float: "left", position: "relative", minHeight: "1px", padding: "0px 15px" }}>
                                <ul className="footer_ul_img">
                                    <li><a href="https://lawrato.com/nalsa"><img style={{
                                        color: " #959595", lineHeight: "36px", marginRight: "4rem", width: " 70 %",
                                        padding: "5px 20px",
                                        background: "white"
                                    }} className="footer_img" src="https://lawrato.com/assets/img/logo_nalsa.png" /></a></li>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "4rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">Apply for Free Legal Aid</a></li>
                                        <li><a style={{ color: " #959595", lineHeight: "36px", marginRight: "-11rem", textDecoration: "none" }} href="https://lawrato.com/divorce-lawyers" title="Divorce Lawyers">A Pro-bono initiative of LawRato in association with NALSA</a></li></div>
                                </ul>
                            </div>
                        </div>
                        <div style={{ display: "table", content: 'none', boxSizing: "border-box", backgroundColor: "red", margin: "15rem" }}></div>
                    </div>
                </div>
            </div>
            <div style={{ display: "table", content: 'none', boxSizing: "border-box", backgroundColor: "red" }}></div>
            <div>
                <div className="footer_fifth">
                    <div style={{ borderTop: "1px solid #959595", padding: "25px 40px 55px", textAlign: "center", lineHeight: "20px", color: "#959595" }}>
                        The information provided on LawRato.com is provided AS IS, subject to <a style={{ color: "#FFFFFF" }} href="https://lawrato.com/cmses/page/terms-of-use">Terms Of Use </a><a style={{ color: "#FFFFFF" }} href="https://lawrato.com/cmses/page/privacy-policy">Privacy Policy</a>. It is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice. Advocate ratings displayed on LawRato.com are based on user feedback. They are not recommendations to engage or consult any lawyer. LawRato does not guarantee accuracy, adequacy or completeness of any information and is not responsible for any errors or omissions, or for results obtained from the use of such information.<br /><br /><span style={{ color: "white" }}>LawRato.com and the LawRato Logo are registered trademarks of PAPA Consultancy Pvt. Ltd. All Rights Reserved. 0.0133
                        </span></div>
                </div>
            </div>
        </div>
    </>;
};

export default Footer;
