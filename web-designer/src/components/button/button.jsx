import React from "react";
import { Fragment } from "react";

import './button.css'

export default props => {
    return(
        <Fragment>
            <div>
                <button className="button">{props.title}</button>
            </div>
        </Fragment>
    )
}