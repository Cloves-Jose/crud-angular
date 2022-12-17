import React, { Component } from "react";
import { Fragment } from "react";

import Menu from "../components/menu/menu";
import Forms from "../components/forms/forms"

export default class Home extends Component {
    render() {
        return(
            <Fragment>
                <Menu/>
                <Forms/>
            </Fragment>
        )
    }
}