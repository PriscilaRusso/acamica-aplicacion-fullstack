import React, {useState} from 'react';
import styles from './Tweets.module.css';
import { firestore } from "../../firebase";
import { collections } from "../../firebase/firebaseConfig";
import Alert from "../Alert/Alert"
import { Link } from 'react-router-dom';


export default function Tweets ({tweet, user}) {
    
    const isLiked= tweet.likes.includes(user?.uid);
    const isUser = tweet.uid === user?.uid;
    const [open, setOpen] = useState(false);
    

    const handleLike = () => {
        if (isLiked) {
            firestore
                .doc(`${collections.TWEETS}/${tweet.id}`)
                .update({ likes: tweet.likes.filter((uid) => uid !== user?.uid) });
        } else {
            firestore
                .doc(`${collections.TWEETS}/${tweet.id}`)
                .update({ likes: [...tweet.likes, user?.uid] });
        }
    };

    const handleDelete = () => {
       firestore.doc(`${collections.TWEETS}/${tweet.id}`).delete()
    }
    
    const onCloseModal = () => setOpen(false)
    
    return (

        <div className={styles.containerTweets}>
            <Alert open={open} onClose={onCloseModal} onConfirm={handleDelete}></Alert>
                   <Link to={`/users/${isUser ? "me" : tweet.uid}`}>
                    <img className={styles.profilePhoto3} src={tweet.pic} alt="Foto del usuario." />
                   </Link>
                <div className={styles.boxTweets}>
                    <div className={styles.infoTw}>
                        <div className={styles.username}>{tweet.autor}</div>
                        {isUser && (<img className={styles.trash} onClick={()=> setOpen (true)} src="/img/Trash.svg" alt="Eliminar." />)}
                    </div>  
                    <div className={styles.parrafo}>{tweet.tweet}</div>
                    <div onClick={handleLike} className={styles.like}>
                        {isLiked ? (
                        <img src="/img/Like.svg" alt="Corazón Rojo." />
                    ) : (
                        <img className={styles.heart} src="/img/CorazonVacio.svg" alt="Corazón Vacio." />
                    )}
                        <span>{tweet.likes.length}</span>
                    </div>
                </div>
        </div>
    )
};

