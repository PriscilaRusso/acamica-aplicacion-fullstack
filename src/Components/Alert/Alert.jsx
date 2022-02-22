import React from "react";
import styles from "./Alert.module.css";
import Modal from "../Modal/Modal";

export default function Alert ({open, onClose, onCancel, onConfirm}) {

    return (
        <Modal open={open} onClose={onClose}>
            <div className={styles.container}>
                <p>Estas seguro que desea eliminar este Tweet?</p>
                <div className={styles.btnBox}>
                    <button onClick={onConfirm} className={styles.yes}>Si</button>
                    <button onClick={onCancel || onClose} className={styles.no}>Cancelar</button>
                </div>
            </div>  
        </Modal>
    )

}

