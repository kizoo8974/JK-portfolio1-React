import React from "react";
import port1 from "../images/port1.jpg";
import port2 from "../images/port2.jpg";
import port3 from "../images/port3.JPG";
import port4 from "../images/port4.JPG";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

// portfolio1 popupbox setting
const openPopupboxPort1 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port1 } alt="portfolio 1..." />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorem omnis nobis distinctio beatae, saepe placeat quaerat quae, excepturi doloribus, inventore ea corporis libero similique qui laboriosam! Aspernatur, quia asperiores.</p>
        <b>Github : </b> <a className="hyper-link" onClick = {() => window.open("https://github.com/kizoo8974/JK-portfolio1-React") }>https://github.com/kizoo8974/JK-portfolio1-React</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort1 = {
    titleBar : {
        enable: true,
        text: "Portfolio 1 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}


// portfolio2 popupbox setting
const openPopupboxPort2 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port2 } alt="portfolio 2..." />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorem omnis nobis distinctio beatae, saepe placeat quaerat quae, excepturi doloribus, inventore ea corporis libero similique qui laboriosam! Aspernatur, quia asperiores.</p>
        <b>Demo : </b>
        <b>Github : </b> <a className="hyper-link" onClick = {() => window.open("https://github.com/kizoo8974/JK-portfolio1-React") }>https://github.com/kizoo8974/JK-portfolio1-React</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort2 = {
    titleBar : {
        enable: true,
        text: "Portfolio 2 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}

// portfolio3 popupbox setting
const openPopupboxPort3 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port3 } alt="portfolio 3..." />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorem omnis nobis distinctio beatae, saepe placeat quaerat quae, excepturi doloribus, inventore ea corporis libero similique qui laboriosam! Aspernatur, quia asperiores.</p>
        <b>Demo : </b>
        <b>Github : </b> <a className="hyper-link" onClick = {() => window.open("https://github.com/kizoo8974/JK-portfolio1-React") }>https://github.com/kizoo8974/JK-portfolio1-React</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort3 = {
    titleBar : {
        enable: true,
        text: "Portfolio 3 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}

// portfolio4 popupbox setting
const openPopupboxPort4 = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={ port4 } alt="portfolio 3..." />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolorem omnis nobis distinctio beatae, saepe placeat quaerat quae, excepturi doloribus, inventore ea corporis libero similique qui laboriosam! Aspernatur, quia asperiores.</p>
        <b>Demo : </b>
        <b>Github : </b> <a className="hyper-link" onClick = {() => window.open("https://github.com/kizoo8974/JK-portfolio1-React") }>https://github.com/kizoo8974/JK-portfolio1-React</a>
    </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigPort4 = {
    titleBar : {
        enable: true,
        text: "Portfolio 4 project."
    },
    fadeIn : true,
    fadeInSpeed: 500
}



    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPort1}>
                        <img className="portfolio-image" src={port1} alt="portfolio1..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort2}>
                        <img className="portfolio-image" src={port2} alt="portfolio2..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort3}>
                        <img className="portfolio-image" src={port3} alt="portfolio3..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPort4}>
                        <img className="portfolio-image" src={port4} alt="portfolio4..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPort1} />
            <PopupboxContainer {...popupboxConfigPort2} />
            <PopupboxContainer {...popupboxConfigPort3} />
            <PopupboxContainer {...popupboxConfigPort4} />
        </div>
    )
}

export default Portfolio;
