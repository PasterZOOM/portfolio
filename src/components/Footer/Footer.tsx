import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/container.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Ilya Pasternak</h2>
                <div className={style.items}>
                    <div className={style.item}/>
                    <div className={style.item}/>
                    <div className={style.item}/>
                    <div className={style.item}/>
                </div>
                <div className={style.inscription}>2021 All rights reserved</div>
            </div>
        </div>
    );
};