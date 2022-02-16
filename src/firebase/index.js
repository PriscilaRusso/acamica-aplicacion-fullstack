import firebase from "firebase/app"
import { firebaseConfig } from "./firebaseConfig"
import "firebase/firestore" 
import "firebase/auth"

// initialize app
firebase.initializeApp(firebaseConfig)

// conect to firebase
export const firestore = firebase.firestore()

// modulo de autenticacion
export const auth = firebase.auth();

// el proveedor de autenticacion 
export const provider = new firebase.auth.GoogleAuthProvider();

// Utilidad para hacer login con el pop-
export const loginConGoogle = () => auth.signInWithPopup(provider);

// la utilidad para hacer logout
export const logout = () => auth.signOut();

export default firebase;