import React, {useState, useEffect} from "react";
import styles from "./Profile.module.css";
import Tweets from '../Tweets/Tweets';
import { Link, Navigate } from "react-router-dom";
import { firestore } from "../../firebase";
import { collections } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";

export default function Profile ({user}) {

    const { uid } = useParams();
    const [  setUserProfile] = useState();
    const [redirect, setRedirect] = useState(false);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        firestore
            .collection(collections.USERS)
            .doc(uid)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setUserProfile(doc.data());
                } else {
                    setRedirect(true);
            
            }})
            .catch((error) => setRedirect(true));
        const unsuscribe = firestore
            .collection(collections.TWEETS)
            .where("uid", "==", uid)
            .onSnapshot((snapshot) => {
                const posts = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setPosts(posts);
              
            });
        return () => unsuscribe();
    }, []);

   
    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div>
            <Link    to="/"> 
            <header className={styles.profile}>
            <img src="/img/back.svg" alt="Back." /> 
            <div className={styles.nameImg}> {posts[0]?.autor} </div>
            </header>
            </Link>
            <div className={styles.info}>
                <img className={styles.picProfile1} src={posts[0]?.pic} alt="Foto de perfil." />
                <div className={styles.user}> {posts[0]?.autor} </div>
            </div>
            {posts.map((tweet, idx) => {
                    return <Tweets key={idx} user={user} tweet={tweet} />;
                })}
        </div>
    )
}
    