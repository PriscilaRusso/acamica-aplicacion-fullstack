import React from "react";
import styles from "./Profile.module.css";
import Tweets from '../Tweets/Tweets';

export default function Profile () {
    return (
        <div>
            <header className={styles.profile}>
                <img className={styles.back} src="./img/back.svg" alt="Back." />
                <img className={styles.nameImg} src="./img/username2.svg" alt="Nombre." />
            </header>
            <div className={styles.info}>
                <img className={styles.picProfile1} src="./img/profilephoto.svg" alt="Foto de perfil." />
                <div className={styles.user}> USERNAME</div>
            </div>
           <Tweets/>
        </div>
    )
}
    