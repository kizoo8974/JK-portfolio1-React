import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <div className="about-p">
                    Hard working and effective Web Developer. Fluent in Korean &amp; English, astute and deadline-driven. Strong understanding of Web development and Graphic design and cutting-edge I.T environment, coupled with Political Science, Restaurant manager background.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
