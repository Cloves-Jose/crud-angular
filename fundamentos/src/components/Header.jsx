import React from 'react'
import { Fragment } from 'react'

import styles from "../styles/Header.module.css"

export default props => {
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>Aquameaca</h3>
                </div>
                <div className={styles.options}>
                    <a href="#" className={styles.info}>Informações</a>
                </div>
            </div>
        </Fragment>
    )
}