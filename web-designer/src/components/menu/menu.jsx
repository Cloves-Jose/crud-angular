import React from "react";
import { Fragment } from "react";
import './menu.css'

import Button from '../button/button'

export default props => {
    return (
        <Fragment>
            <div className="container">
                <div className="containerBody">
                    <div className="headerTitle">
                        <h3>SOCIANET</h3>
                    </div>
                    <div className="optionsMenu">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Spaces</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Pages</a>
                    </div>
                    <div>
                        <Button title="GET STARTED"/>
                    </div>
                </div>
                <div className="headerBody">
                    <div>
                        <p className="contactUs">Contact us</p>
                        <p className="fromYou">We would love to hear from you.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}