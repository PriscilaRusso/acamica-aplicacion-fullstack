import React, {useState, useEffect} from 'react';
import styles from './Feed.module.css';
import Tweets from '../Tweets/Tweets';
import { firestore} from "../../firebase";
import { collections } from "../../firebase/firebaseConfig";
import { NavLink, Navigate } from 'react-router-dom';

export default function Feed ({user}) {
     
    const [tweets, setTweets] = useState([]);
    const [tweet, setTweet] = useState({
    tweet: "",
    autor: user?.displayName,
    uid: user?.uid,
    pic: user?.photoURL,
    likes: []
    })

    const handleTweetChange = (e) => {
        let nuevoTweet = {
          ...tweet,
          tweet: e.target.value,
        }
        setTweet(nuevoTweet)
        console.log(tweet);
      };

      const sendTweet = async (e) => {
       await firestore.collection(collections.TWEETS).add(tweet);
      
        setTweet({
          ...tweet,
          tweet: ""
        })
      };

      useEffect(() => {
        const desuscribir = firestore
          .collection(collections.TWEETS)
          .onSnapshot((snapshot) => {
              const tweets = snapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              });
              setTweets(tweets);

          });

          return () => desuscribir(); },[]);

          if (!user) {
            return <Navigate replace to="/login" />;
        }


    return (
        <div className={styles.boxFeed}>
            <div className={styles.headerFeed}>
                <NavLink to="/users/me"><img className={styles.profilePhoto} src={user.photoURL} alt="Foto de perfil." /></NavLink>
                <img className={styles.logo} src="./img/Group 2.svg" alt="Logo Devs United." />
                <img className={styles.title} src="./img/Group 1.svg" alt=" Devs United." />
            </div>
            <div className={styles.formulario}>
                <div className={styles.boxFormulario}>
                      <img className={styles.profilePhoto2} src={user.photoURL} alt="Foto de perfil." />
                    <textarea 
                    placeholder='Whats is happening?' 
                    cols="" 
                    rows="" 
                    value={tweet.tweet} 
                    onChange={handleTweetChange} />    
                </div>    
                <div className={styles.accountant}>
                    <span className={styles.spanAccountant}>{tweet.tweet.length}</span>
                    <span className={styles.spanMax}>200max</span>
                </div>
                <button className={styles.btnEnviar} onClick={sendTweet}>POST</button>
            </div>
            {tweets.map((tweet,idx) => {return <Tweets key={idx} user={user} tweet={tweet}/>})}
        </div>
    )
    };