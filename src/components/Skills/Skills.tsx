import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../../common/styles/container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../common/Title/Title'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleName={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'UI/UX DESIGN'} description={'There are many variations of pssages of Lorm available, bu in some form'}/>
                    <Skill title={'WEB DESIGN'} description={'There are many variations of pssages of Lorm available, bu in some form'}/>
                    <Skill title={'MINIMAL DESIGN'} description={'There are many variations of pssages of Lorm available, bu in some form'}/>
                    <Skill title={'DEVELOPMENT'} description={'There are many variations of pssages of Lorm available, bu in some form'}/>
                </div>
            </div>
        </div>
    )
}
