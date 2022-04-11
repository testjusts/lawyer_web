import { lineHeight } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Client extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
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
            <div className="client" >
                <h2 style={{ marginBottom: "3rem" }}>Client Testimonials</h2>
                <Slider {...settings} className="client_Card" >
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>
                        <div style={{fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "center", display:"flex", justifyContent:"center", alignItems:"center"}}><p style={{fontSize:"16px"}}>"Hiring a lawyer in Pune while sitting here in Delhi was an absolute cakewalk- all thanks to the the extremely dedicated team of LawRato who have been helping me fight my divorce case in Pune. It has already been a highly satisfying experience."</p>
                        <p><a>Rahul A</a></p></div>

                </Slider>
            </div>
        );
    }
}
