import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/container.module.css';
import {Project} from './Project/Project';

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'todolist'} description={'to-do list app'}/>
                    <Project title={'social network'} description={'big social network'}/>
                </div>
            </div>
        </div>
    )
}
