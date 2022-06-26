import React from 'react'
import style from './Button.module.scss'

export type ButtonPropsType = {
    name: string
}
export const Button: React.FC<ButtonPropsType> = ({name}) => {
    return (
        <div className={style.buttonBlock}>
            <button>{name}</button>
        </div>
    )
}
