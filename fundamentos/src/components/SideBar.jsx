import React from "react";
import { Fragment } from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import style from "../styles/SideBar.module.css"

export default props => {
    return (
        <Fragment>
            <Sidebar>
                <Menu>
                    <MenuItem>Cadastrar ameaça</MenuItem>
                    <SubMenu label="Relatórios">
                        <MenuItem>Ameaças por bairro</MenuItem>
                        <MenuItem>Gênero</MenuItem>
                        <MenuItem>Idade</MenuItem>
                    </SubMenu>
                    <MenuItem>Ameaças resolvidas</MenuItem>
                </Menu>
            </Sidebar>
        </Fragment>
    )
}