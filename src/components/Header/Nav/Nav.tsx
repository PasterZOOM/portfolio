import React from 'react'
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.elementMenu}><a href="">Home</a></div>
            <div className={style.elementMenu}><a href="">About</a></div>
            <div className={style.elementMenu}><a href="">Projects</a></div>
            <div className={style.elementMenu}><a href="">Skills</a></div>
            <div className={style.elementMenu}><a href="">Contacts</a></div>
        </div>
    )
}