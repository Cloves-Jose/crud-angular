import React from "react"
import { Fragment } from "react"
import "./forms.css"

export default props => {
    return(
        <Fragment>
            <div className="form">
                <form action="" method="post">
                <label>
                    Name:
                </label>
                <input id="POST-name" type="text" name="name" />
                </form>
            </div>
        </Fragment>
    )
}