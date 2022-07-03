import React from 'react'
import style from './AboutMe.module.scss'
import {Title} from '../common/Title/Title'
import {Button} from '../common/Button/Button'
import {SkillBar} from '../common/SkillBar/SkillBar'

export const AboutMe = () => {
    return (
        <div className={style.aboutBlock}>
            <Title titleName={'About me'}/>
            <div className={style.mainTextAndStatContainer}>
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
                        <SkillBar skill={'JavaScript / TypeScript'} percent={90}/>
                        <SkillBar skill={'React / Redux'} percent={85}/>
                        <SkillBar skill={'CSS3 / HTML5'} percent={80}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
