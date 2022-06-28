import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../common/Title/Title'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title titleName={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions'}/>
                    <Skill title={'CSS'} description={'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.'}/>
                    <Skill title={'React'} description={'A JavaScript library for building user interfaces'}/>
                    <Skill title={'React'} description={'A JavaScript library for building user interfaces'}/>
                    <Skill title={'React'} description={'A JavaScript library for building user interfaces'}/>
                </div>
            </div>
        </div>
    )
}
