import React from "react";
import { loginConGoogle } from "../../firebase/index.js";
import styles from "./LoginPage.module.css";

function LoginPage () {
    return (
    <div className={styles.loginPage}>
        <div className={styles.imgBox}>
            <img className={styles.imgLogo} src="./img/Group 2.svg" alt="Imagén del Logo." />
            <img className={styles.imgName} src="./img/Group 1.svg" alt="Nombre." />
        </div>
        <div className={styles.titleBox}>
            <img className={styles.title} src="./img/title.svg" alt="Titulo." />
            <p className={styles.description}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className={styles.btn} onClick={loginConGoogle}>
                <img  className={styles.google} src="./img/Google.svg" alt="Logo de Google."/>
                Sign in with Google
            </button>
            <div className={styles.foot}>
                <p>© 2020 Devs_United - <span>BETA</span> </p>
            </div>
        </div>
    </div>
    )   
}

export default LoginPage;