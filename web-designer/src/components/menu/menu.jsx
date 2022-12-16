import React from "react";
import { Fragment } from "react";
import './menu.css'

export default props => {
    return (
        <Fragment>
            <div className="container">
                <div className="headerTitle">
                    <div>
                        <h3>SOCIONET</h3>
                    </div>
                </div>
                <div className="optionsMenu">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Spaces</div>
                    <div>Portfolio</div>
                    <div>Contact Us</div>
                    <div>Pages</div>
                </div>
            </div>
        </Fragment>
    )
}