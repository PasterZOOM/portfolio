import React from 'react';
import styles from './Skill.module.scss'

export type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={styles.skill}>
            <div className={styles.single}>
                <div className={styles.icon}></div>
                <h5>{title}</h5>
                <hr/>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};
