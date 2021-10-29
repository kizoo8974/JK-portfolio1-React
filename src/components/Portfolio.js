import React from "react";
import port1 from "../images/React-particles-js.png";
import port2 from "../images/React-popupbox.png";
import port3 from "../images/React-responsive-carousel.png";
import port4 from "../images/EmailJS.png";
import port5 from "../images/Ract-Hook-Form.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

// popupbox setting
const openPopupboxPort1 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port1 } alt="React-particles-js..." />
        <h1>React-particles-js</h1>
        <p>I use React-particles-js as Header active wallpaper.</p>
        <b>URL : </b> <a className="hyper-link" onClick = {() => window.open("https://www.npmjs.com/package/react-particles-js") }>https://www.npmjs.com/package/react-particles-js</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort1 = {
    titleBar : {
        enable: false,
        text: "React-particles-js."
    },
    fadeIn : true,
    fadeInSpeed: 500
}


//popupbox setting
const openPopupboxPort2 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port2 } alt="React-popupbox..." />
        <h1>React-Popupbox</h1>
        <p>Reactjs-popupbox is a simple react popup component that helps you create simple and complex Modals, tooltips, and Menus</p>
        <b>URL : </b> <a className="hyper-link" onClick = {() => window.open("https://www.npmjs.com/package/react-popupbox") }>https://www.npmjs.com/package/react-popupbox</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort2 = {
    titleBar : {
        enable: false,
        text: "React-popupbox."
    },
    fadeIn : true,
    fadeInSpeed: 500
}

//popupbox setting
const openPopupboxPort3 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port3 } alt="React-responsive-carousel..." />
        <h1>React-Responsive-Carousel</h1>
        <p>React-Responsive-Carousel is powerful, lightweight and fully customizable carousel component for React apps.</p>
        <b>URL : </b> <a className="hyper-link" onClick = {() => window.open("https://www.npmjs.com/package/react-responsive-carousel") }>https://www.npmjs.com/package/react-responsive-carousel</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort3 = {
    titleBar : {
        enable: false,
        text: "Portfolio 3 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}

//popupbox setting
const openPopupboxPort4 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port4 } alt="EmailJS..." />
        <h1>EmailJS</h1>
        <p>EmailJS is a JS service that sends emails directly from your client-side JavaScript code.</p>
        
        <b>URL : </b> <a className="hyper-link" onClick = {() => window.open("https://www.emailjs.com") }>https://www.emailjs.com</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort4 = {
    titleBar : {
        enable: false,
        text: "Portfolio 4 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}

//popupbox setting
const openPopupboxPort5 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port5 } alt="React Hook Form..." />
        <h1>React-Hook-Form</h1>
        <p>React-Hook-Form is a react component for creating forms and making validation functions.</p>
        
        <b>URL : </b> <a className="hyper-link" onClick = {() => window.open("https://react-hook-form.com/") }>https://react-hook-form.com/</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort5 = {
    titleBar : {
        enable: false,
        text: "Portfolio 4 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}


    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">React</h1>
                <div className="image-box-wrapper row justify-content-center">
                <div className="col-lg-6 col-xm-12">
                    <div className="about-p">
                    React Components &amp; Techniques used to create this website
                    </div>
            </div>
                    <div className="portfolio-image-box" onClick={openPopupboxPort1}>
                        <img className="portfolio-image" src={port1} alt="React-particles-js..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>React-particles-js</h4>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort2}>
                        <img className="portfolio-image" src={port2} alt="React-popupbox..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>React-popupbox</h4>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort3}>
                        <img className="portfolio-image" src={port3} alt="React-responsive-carousel..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>React-Responsive-Carousel</h4>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort4}>
                        <img className="portfolio-image" src={port4} alt="EmailJS..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>EmailJS</h4>
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort5}>
                        <img className="portfolio-image" src={port5} alt="React-Hook-Form..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        <h4>React-Hook-Form</h4>
                    </div>
                </div>
            </div>

            <PopupboxContainer {...popupboxConfigPort1} />
            <PopupboxContainer {...popupboxConfigPort2} />
            <PopupboxContainer {...popupboxConfigPort3} />
            <PopupboxContainer {...popupboxConfigPort4} />
            <PopupboxContainer {...popupboxConfigPort5} />
            
        </div>
    )
}

export default Portfolio;
