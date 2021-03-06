import React from 'react'
import style from './Main.module.scss'
import {Button} from '../common/Button/Button'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.mainText}>
                    <h5>Hello, my name is</h5>
                    <h1>Ilya Pasternak</h1>
                    <p>I'm a Front-end developer</p>
                    <div className={style.buttonBlock}>
                        <Button name={'my work'}/>
                    </div>
                </div>

                <div className={style.mainPhoto}>

                </div>

            </div>
        </div>
    )
}