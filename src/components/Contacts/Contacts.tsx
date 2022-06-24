import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactForm}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea className={style.textarea}/>
                    <button type='submit' className={style.submitBtn}>Send</button>
                </form>

            </div>
        </div>
    )
}
