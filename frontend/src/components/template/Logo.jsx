import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'
import logo from '../../assets/images/logo.png'

export default props => {
    return (
        <Fragment>
            <aside className='logo'>
                <Link className='logo' to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </aside>
        </Fragment>
    )
}