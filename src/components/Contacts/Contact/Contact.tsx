import React from 'react'
import styles from './Contact.module.scss'

type ContactPropsType = {
    title: string
    description: string
}

export const Contact: React.FC<ContactPropsType> = ({title, description}) => {
    return (
        <div className={styles.content}>
            <div className={styles.icon}></div>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    )
}
