import React from "react";
import { Component, Fragment } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { ProSidebarProvider } from 'react-pro-sidebar'

export default class Home extends Component {
    render () {
        return (
            <Fragment>
                <Header/>
                <ProSidebarProvider>
                    <SideBar/>
                </ProSidebarProvider>
            </Fragment>
        )
    }
}