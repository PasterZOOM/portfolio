import React from 'react';
import style from './Skill.module.css'

export type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}/>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
};
