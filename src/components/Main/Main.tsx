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
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        demord by</p>
                    <Button name={'my work'}/>
                </div>

                <div className={style.mainPhoto}>

                </div>

            </div>
        </div>
    )
}