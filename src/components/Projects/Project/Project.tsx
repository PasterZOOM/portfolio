import React from 'react'
import styles from './Project.module.scss'

export type ProjectPropsType = {
    style: string
    title: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = ({style, title, description}) => {
    return (
        <div className={styles.project}>
            <div className={styles.img} style={{backgroundImage: `url(${style})`}}>
                <div className={styles.zoomIcon}>
                    <a href=""></a>
                </div>
                <div className={styles.title}>
                        <a href="">{title}</a>
                        <span>{description}</span>
                </div>
            </div>
        </div>
    )
}