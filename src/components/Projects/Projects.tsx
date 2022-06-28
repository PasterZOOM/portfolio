import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/container.module.scss';
import {Project} from './Project/Project';
import {Title} from '../common/Title/Title'

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleName={'My projects'}/>
                <div className={style.projects}>
                    <Project title={'todolist'} description={'to-do list app'}/>
                    <Project title={'social network'} description={'big social network'}/>
                </div>
            </div>
        </div>
    )
}
