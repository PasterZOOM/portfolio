import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/container.module.scss';
import {Project} from './Project/Project';
import {Title} from '../common/Title/Title'
import socialNetwork from '../../image/social-network.png'
import todolist from '../../image/todolist.jpg'
import cards from '../../image/cards.jpg'

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title titleName={'My projects'}/>
                <div className={style.projects}>
                    <Project style={todolist} title={'Todolist'} description={'To-do list app'}/>
                    <Project style={socialNetwork} title={'Social Network'} description={'Big social network'}/>
                    <Project style={cards} title={'Cards'} description={'Cards'}/>
                </div>
            </div>
        </div>
    )
}
