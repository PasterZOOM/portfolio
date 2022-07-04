import React from 'react'
import style from './SkillBar.module.scss'

type SkillBarPropsType ={
    skill:string
    percent:number
}

export const SkillBar:React.FC<SkillBarPropsType> = ({skill, percent}) => {
    return (
        <div className={style.skillBar}>
            <h4 className={style.progressTitleHolder} style={{width:`${percent}%`}}>

                <span className={style.progressWrapper}>
                    <span className={style.progressMark}>
                        <span className={style.percent}>{percent}%</span>
                    </span>
                </span>
                <span className={style.progressTitle}>{skill}</span>
            </h4>
            <div className={style.progressOuter}>
                <div className={style.progressContent} style={{width:`${percent}%`}}></div>
            </div>
        </div>
    )
}