import React from 'react';

const About = () => {
    return <div className="about_sec">
        <div style={{
            background: " #fafafa",
            textAlign: "center",
            paddingBottom: " 35px",
            paddingTop: "60px",
            borderTop: "1px solid #cecece"
        }}>
            <div className="about_card">
                <span style={{ fontWeight: "700", color: "#333", fontSize: "30px", lineHeight: "30px", marginBottom: "10px" }}>50,000 People Choose LawRato Every Day</span>
                <hr style={{
                    marginBottom: "40px", border:"5px solid #2196f3", display:"block", borderBottom:"0", marginTop:"10px"
                }}/>
                    <div style={{margin:"0px -15px"}}>
                        <div style={{width:"33.33333333%", float:"left", position:"relative", minHeight:"1px", padding:"0px 15px"}}>
                            <span style={{fontWeight:"700", textTransform:"uppercase", marginBottom:"10px"}}>10,000+ VERIFIED LAWYERS</span>
                            <p style={{lineHeight:"30px", fontSize:"14px"}}>India’s biggest lawyer network in 700+ cities across every area of law.</p>
                        </div>
                    </div>
                    <div style={{margin:"0px -15px"}}>
                        <div style={{width:"33.33333333%", float:"left", position:"relative", minHeight:"1px", padding:"0px 15px"}}>
                            <span style={{fontWeight:"700", textTransform:"uppercase", marginBottom:"10px"}}>10,000+ VERIFIED LAWYERS</span>
                            <p style={{lineHeight:"30px", fontSize:"14px"}}>India’s biggest lawyer network in 700+ cities across every area of law.</p>
                        </div>
                    </div>
                    <div style={{margin:"0px -15px"}}>
                        <div style={{width:"33.33333333%", float:"left", position:"relative", minHeight:"1px", padding:"0px 15px"}}>
                            <span style={{fontWeight:"700", textTransform:"uppercase", marginBottom:"10px"}}>10,000+ VERIFIED LAWYERS</span>
                            <p style={{lineHeight:"30px", fontSize:"14px"}}>India’s biggest lawyer network in 700+ cities across every area of law.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>;
};

export default About;
