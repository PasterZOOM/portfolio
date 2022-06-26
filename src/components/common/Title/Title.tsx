import React from 'react'
import style from './Title.module.scss'

export type TitlePropsType = {
    titleName: string
}

export const Title: React.FC<TitlePropsType> = ({titleName}) => {
    return (
        <div className={style.titleBlock}>
            <h2>{titleName}</h2>
            <div className={style.horizontalLine}>
                <div className={style.top}/>
                <div className={style.bottom}/>
            </div>
        </div>
    )
}