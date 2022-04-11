import { lineHeight } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios"

export default class TopRated extends Component {
    state = {
        myData: [], // list is empty in the beginning
        error: false
    };

    componentDidMount() {
        this.getMyData(); // function call
    }

    getMyData = async () => {
        try { //try to get data
            const response = await axios.get("/signup/");
            this.setState({ myData: response.data });
            console.log(response.data)

        } catch (e) { //code will jump here if there is a network problem
            this.setState({ error: true });
        }
    };


    render() {
        const { myData } = this.state
        console.log(myData)
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
            <div className="topRated">
                <h2 className="toprated_heading">Top-rated lawyers in India</h2>
                <Slider {...settings} className="toprated_card" style={{ display: "flex", textAlign: "left" }}>
                    {myData && myData.map((tab, i) => (
                        <div key={i}  style={{ padding: "0px 10px", border: "1px solid #cdcdcd", textAlign: "left" }}>
                            <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "18px", color: "#2196f3", textAlign: "left" }}>{tab.court}</div>
                            <div className="toprated_card_box">
                                <div className="toprated_card_inner">
                                    <div className="toprated_card_inner_img"><a><img style={{height:"89px", width:"115px"}} src={tab.img}></img></a></div>
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "-0.5rem", paddingTop:"15px" }}>
                                        <h4 style={{ fontWeight: "300", fontSize: "20px", marginBottom: "5px" }}>
                                            <a>{tab.name}</a>
                                        </h4>
                                        <div style={{ display: "flex", lineHeight: "22px", marginBottom: "10px" }}>
                                            <span style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                                                <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                                <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                                <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                                <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                                <img style={{ marginRight: '5px' }} src={"https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon.png"} />
                                            </span>
                                            <span>{tab.rating} | 100+ ratings</span>
                                        </div>
                                        <div style={{ display: "flex", marginBottom: "10px" }}><img src={"https://lawrato.com/assets/img/sprite/icon/map-marker-icon.png"} />
                                            <span>{tab.city}</span></div>
                                        <div style={{ display: "flex", marginBottom: "10px" }}><img src={"https://lawrato.com/assets/img/sprite/icon/suitcase-icon.png"} />
                                            <span>{tab.experience} years Experience</span></div>

                                    </div>
                                </div>
                                <div style={{ display: "flex", marginBottom: "10px", color: "#666" }}>

                                    PRACTICE AREAS: {tab.separate_area} + 3 more </div>
                            </div>
                            <div style={{ width: "90%", textAlign: "left" }}>
                                <a style={{ fontWeight: "400", textDecoration: "none", backgroundColor: "#fff", color: "#2196f3", border: '1px solid #2196f3', borderRadius: "2px", padding: "3px 1px", lineHeight: "1.42857143" }} href="#">View more {tab.court} Lawyers</a>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        );

    }

}


