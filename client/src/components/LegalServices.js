import { lineHeight } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

export default class LegalServices extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", margin: "5rem 5rem" }}>
                <h2 style={{ marginBottom: "4rem" }}>Legal Services</h2>
                <Slider {...settings} style={{display:"flex",textAlign:"left"}}>
                    <div style={{ padding: "0px 10px", border: "1px solid #cdcdcd", textAlign:"left"}}>
                        <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3",  textAlign:"left"}}>Family/Matrimonial</div>
                        <div style={{ border: "1px solid #cdcdcd", padding: "0px 20px", height: "35vh", marginBottom: "20px", textAlign: "left",  width:"90%", fontWeight: "300", display:"flex",flexDirection:"column", justifyContent:"space-between" }}>
                            <div style={{ }}>
                                <div style={{ display: "flex", flexDirection: "column", marginTop:"-0.5rem"}}>
                                    <h4 style={{ fontWeight: "300", fontSize: "20px", marginBottom: "5px" }}>
                                        <a>Advocate Sudershani Ray</a>
                                    </h4>
                                    <div style={{ display: "flex", lineHeight: "22px", marginBottom: "10px" }}>
                                        <span style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                            <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                            <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                            <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                            <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                            <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                        </span>
                                        <span>4.7 | 100+ ratings</span>
                                    </div>
                                    <div style={{ display: "flex", marginBottom: "10px", color: "#666" }}>
                                    Get your marriage registered through an experienced local advocate in the city of your residence</div>

                                </div>
                            </div>
                           <div style={{marginTop:"-35px"}}> <a style={{ fontWeight: "700", textDecoration: "none", backgroundColor: "#2196f3", color: "white", border: '1px solid #2196f3', borderRadius: "2px", padding: "10px 20px", lineHeight: "5.42857143" }} href="#">Learn More</a></div>
                        </div>
                        <div style={{width:"90%", textAlign:"left"}}>
                        <a style={{ fontWeight: "400", textDecoration: "none", backgroundColor: "#fff", color: "#2196f3", border: '1px solid #2196f3', borderRadius: "2px", padding: "3px 51px", lineHeight: "1.42857143" }} href="#">View more Supreme Court Lawyers</a>
                    </div>

                    </div>
                </Slider>
            </div>
        );
    }
}