import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience &amp; Education</h1>
            </div>
            <div className="container experience-wrapper">
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2007 - 2009</h3>
                            <p>Military Service / Air Force - Suwon, South Korea</p>
                            <p>Served as the Anti-aircraft gun unit's representative soldier</p>
                            <p>Honorable discharge</p>
                        </div>
                </div>      
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3> ~ 2015</h3>
                            <p>Ajou University - Suwon, Korea</p>
                            <p>BS: Political science and Diplomacy</p>
                        </div>
                    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2015 - 2017</h3>
                            <p>Manager / Restaurant for Bokja High-School - Cheonan-si, South Korea</p>
                            <p>- Successfully managed hall of residence restaurant and take over a business to next owner</p>
                        </div>
                    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2018 - 2019</h3>
                            <p>Fanshawe College - Ontario, Canada</p>
                            <p>BS: Internet applications and Web development</p>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Experience;
