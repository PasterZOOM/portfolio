import React from 'react'
import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/container.module.scss'
import {Title} from '../common/Title/Title'
import {Button} from '../common/Button/Button'
import {SkillBar} from '../common/SkillBar/SkillBar'

export const AboutMe = () => {
    return (
        <div className={style.aboutBlock}>
            <div className={styleContainer.container}>
                <Title titleName={'About me'}/>
                <div className={style.aboutContainer}>
                    <div className={style.mainText}>
                        <h3>Howdy!</h3>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire,
                            tht they cannot foresee the pain and trouble that are</p>
                        <div className={style.buttonBlock}>
                            <Button name={'Download my CV'}/>
                        </div>
                    </div>

                    <div className={style.stat}>
                        <div>
                            <input type={'range'} value={90}/>
                        </div>
                        <SkillBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
