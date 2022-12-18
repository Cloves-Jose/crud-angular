import React from "react";
import { Fragment } from "react";

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar'

export default props => {

    /**
     * Colapsa a sidebar quando o mouse 
     * é tirado de cima dela
     */
    const { collapseSidebar } = useProSidebar()

    return (
        <Fragment>
            <div style={{display: 'flex', height: '100%', minHeight: '400px'}}
            >
                <Sidebar
                    rootStyles={sidebarClasses.container}
                    defaultCollapsed
                    collapsedWidth="60px"
                    onMouseOut={() => collapseSidebar()}
                    
                >
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
            </div>
        </Fragment>
    )
}

/**
 * Formatação CSS da sidebar
 */
const sidebarClasses = {
    container: {
        backgroundColor: "red",
    },
}