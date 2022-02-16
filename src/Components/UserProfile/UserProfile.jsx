import React from "react";
import styles from "./UserProfile.module.css";

function UserProfile () {
  
return (
      <div>
          <header className={styles.userProfileBox}>
            <div className={styles.imgBox}>
                <img className={styles.arrow} src="./img/back.svg" alt="Back." />
                <img className={styles.username} src="./img/username2.svg" alt="Nombre." />
            </div>  
            <div className={styles.logoutBox}>
                <img className={styles.logout} src="./img/logout.svg" alt="Cerrar sesión." />
                <img className={styles.logoutIcon} src="./img/logoutIcon.svg" alt="Icono." />   
            </div>   
          </header>     
            <div className={styles.userBox}>
                <img className={styles.picProfile3} src="./img/profilephoto.svg" alt="Foto de perfil." />
                <div className={styles.name}> USERNAME</div>
              <div className={styles.myProfile}>
                  <div className={styles.post}>POSTS</div>
                  <div className={styles.fav}>FAVORITES</div>
              </div>
            </div>
           
      </div>
    )
}

export default UserProfile;