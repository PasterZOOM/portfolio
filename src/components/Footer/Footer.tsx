import React from 'react'
import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.inscription}>
                    <span>Ilya Pasternak 2022</span>
                </div>
                <div className={style.items}>
                    <div className={style.item}><a href='https://www.linkedin.com/in/ilya-pasternak-274951243/' target="_blank" rel="noreferrer">Linkedin</a></div>
                    <div className={style.item}><a href='https://github.com/PasterZOOM' target="_blank" rel="noreferrer">GitHub</a></div>
                    <div className={style.item}><a href='mailto:pasterzoom@gmail.com' target="_blank" rel="noreferrer">Email</a></div>
                </div>
            </div>
        </div>
    )
}