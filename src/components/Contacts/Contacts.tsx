import React from 'react'
import styles from './Contacts.module.scss'
import styleContainer from '../common/styles/container.module.scss'
import {Contact} from './Contact/Contact'
import {Button} from '../common/Button/Button'


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styles.contactsContainer} ${styleContainer.container}`}>
                <div className={styles.touch}>
                    <div className={styles.titleBlock}>
                        <h2>Get in Touch</h2>
                        <div className={styles.horizontalLine}>
                            <div className={styles.top}/>
                            <div className={styles.bottom}/>
                        </div>
                        <p>There are many variations of pssges of Lorem Ipsum available, bu in some form, by</p>
                    </div>

                    <div className={styles.contacts}>
                        <Contact title={'Phone'} description={'+375257390658'}/>
                        <Contact title={'Email'} description={'pasterzoom@gmail.com'}/>
                        <Contact title={'Location'} description={'Minsk, Belarus'}/>
                    </div>
                </div>
                <form>
                    <div className={styles.contactForm}>
                        <div className={styles.nameEmail}>
                            <div className={styles.name}>
                                <input type="text" name="name" placeholder={'Your Name'}/>
                            </div>
                            <div className={styles.name}>
                                <input type="email" name="email" placeholder={'Your Email'} className={styles.email}/>
                            </div>
                        </div>
                        <div className={styles.message}>
                            <textarea name="message" cols={40} rows={10} placeholder={'Your Message'}></textarea>
                            <div className={styles.button}>
                                <Button name={'send message'}/>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
