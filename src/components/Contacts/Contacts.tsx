import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/container.module.css';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea className={style.textarea} />
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
