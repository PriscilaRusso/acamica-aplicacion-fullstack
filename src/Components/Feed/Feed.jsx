import React from 'react';
import styles from './Feed.module.css';
import Tweets from '../Tweets/Tweets';

function Feed () {
    return (
        <div className={styles.boxFeed}>
            <div className={styles.headerFeed}>
                <img className={styles.profilePhoto} src="./img/profilephoto.svg" alt="Foto de perfil." />
                <img className={styles.logo} src="./img/Group 2.svg" alt="Logo Devs United." />
                <img className={styles.title} src="./img/Group 1.svg" alt=" Devs United." />
            </div>
            <div className={styles.formulario}>
                <div className={styles.boxFormulario}>
                    <img className={styles.profilePhoto2} src="./img/profilephoto.svg" alt="Foto de perfil." />
                    <textarea placeholder='Whats is happening?' cols="" rows="" value="" onChange="" />    
                </div>    
                <div className={styles.accountant}>
                    <span className={styles.spanAccountant}>17</span>
                    <span className={styles.spanMax}>200max</span>
                </div>
                <button className={styles.btnEnviar} onClick="">POST</button>
            </div>
            <Tweets/>
        </div>
    )
}

export default Feed;