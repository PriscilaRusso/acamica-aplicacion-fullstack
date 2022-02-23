import React, {useState, useEffect} from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import styles from "./UserProfile.module.css";
import {logout, firestore} from '../../firebase/index';
import {collections} from "../../firebase/firebaseConfig";
import Tweets from "../Tweets/Tweets";

function UserProfile ({user, isPost}) {

  const [posts, setPosts] = useState([]);
  const [favs, setFavs] = useState([]);
  

useEffect(() => {
  let unsubscribePosts;
  let unsubscribeFavs;
  if (user) {
      unsubscribePosts = firestore
          .collection(collections.TWEETS)
          .where("uid", "==", user.uid)
          .onSnapshot((snapshot) => {
              const posts = snapshot.docs.map((doc) => {
                  return {
                      id: doc.id,
                      ...doc.data(),
                  };
              });
              setPosts(posts);
          });
      unsubscribeFavs = firestore
          .collection(collections.TWEETS)
          .where("likes", "array-contains", user.uid)
          .onSnapshot((snapshot) => {
              const favs = snapshot.docs.map((doc) => {
                  return {
                      id: doc.id,
                      ...doc.data(),
                  };
              });
              setFavs(favs);
          });
      return () => {
          if (unsubscribeFavs) {
              unsubscribeFavs();
          }
          if (unsubscribePosts) {
              unsubscribePosts();
          }
      };
  }
}, []);

if (!user) {
  return <Navigate replace to="/" />;
}

const tweets = isPost ? posts : favs;
console.log(tweets);
return (
      <div className={styles.userP}>
          <header className={styles.userProfileBox}>
            <Link to="/">
              <div className={styles.imgBox}>
                <img className={styles.arrow} src="/img/back.svg" alt="Back." />
                <span className={styles.nameSpan}>{user.displayName}</span>
              </div> 
             </Link>  
            <div onClick={logout} className={styles.logoutBox}>
                <img className={styles.logout}  src="/img/logout.svg" alt="Cerrar sesión." />
                <img className={styles.logoutIcon} src="/img/logoutIcon.svg" alt="Icono." />   
            </div>   
          </header>     
              <div className={styles.userBox}>
                  <img className={styles.picProfile3} src={user.photoURL} alt="Foto de perfil." />
                  <div className={styles.name}> {user.displayName}</div>
              <div className={styles.myProfile}>
                   <NavLink to="/users/me/post">
                    <div className={styles.post}>POSTS</div>
                   </NavLink>
                   <NavLink to="/users/me/favs">
                   <div className={styles.fav}>FAVORITES</div>
                   </NavLink>
                    
              </div> 
            </div>
            {tweets.map((tweet,idx) => {return <Tweets key={idx} user={user} tweet={tweet}/>})}
      </div>
    )
}

export default UserProfile;