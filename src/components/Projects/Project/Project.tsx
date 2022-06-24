import React from 'react';
import style from './Project.module.scss'

export type ProjectPropsType = {
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <button>View</button>
            </div>
            <div className={style.descriptionBlock}>
                <div className={style.descriptionContainer}>
                    <h3 className={style.title}>{title}</h3>
                    <span className={style.description}>{description}</span>
                </div>
            </div>


        </div>
    )
}