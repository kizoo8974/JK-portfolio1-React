import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faAd, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                    
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>Bootstrap, Figma, Sass</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Web Development</h3>
                                <p>React, PHP</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/></div>
                                <h3>Google Ads</h3>
                                <p>Google Analytics</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faAd} size="2x"/></div>
                                <h3>Graphic Design</h3>
                                <p>Photoshop, Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
