import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Hi there</span>
                    <h1>I am Ilya Pasternak</h1>
                    <p>Frontend Developer</p>
                </div>

                <div className={style.mainPhoto}
                />
            </div>
        </div>
    )
}