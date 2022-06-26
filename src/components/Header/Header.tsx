import React from 'react'
import style from './Header.module.scss'
import {Nav} from './Nav/Nav'

export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={style.headerContainer}>
                <div className={style.left}>
                    <a href={''}>
                        <div className={style.logo}>

                        </div>
                    </a>
                </div>
                <Nav/>
            </div>

        </div>
    )
}