import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <h5>Hello, my name is</h5>
                    <h1>Ilya Pasternak</h1>
                    <p>Frontend Developer</p>
                </div>

                <div className={style.mainPhoto}
                />
            </div>
        </div>
    )
}