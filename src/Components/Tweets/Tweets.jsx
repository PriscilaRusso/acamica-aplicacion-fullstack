import React from 'react';
import styles from './Tweets.module.css'

export default function Tweets () {
    return (
        <div className={styles.containerTweets}>
                    <img className={styles.profilePhoto3} src="./img/profilePhoto.svg" alt="Foto del usuario." />
                <div className={styles.boxTweets}>
                    <div className={styles.infoTw}>
                        <div className={styles.username}>USERNAME</div>
                        <img className={styles.trash} src="./img/trash.svg" alt="Eliminar." />
                    </div>  
                    <div className={styles.parrafo}>HolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHolaHola</div>
                    <div className={styles.like}>
                        <img src="./img/like.svg" alt="Like." />
                        <span>100</span>
                    </div>
                </div>
        </div>
    )
}

