import React, { useState, useEffect} from 'react';
import './App.css';
import {  firestore, loginConGoogle, auth, } from './firebase';
import { Navigate, Route, Routes} from "react-router-dom";
//Components
import LoginPage from './Components/LoginPage/LoginPage';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import UserProfile from './Components/UserProfile/UserProfile';
import Alert from './Components/Alert/Alert';


function App() {

const [user, setUser] = useState(null);
const login = async() => {
  const resultado = await loginConGoogle();
  setUser(resultado.user)
}

useEffect ( () => {
  auth.onAuthStateChanged((user) => {
    setUser(user);
  })
},[])

  return (
    <div className="App">

      <Routes>
          <Route 
            path='/login'element={<LoginPage user={user} login={login}/>}
          />
          <Route 
            path='/'element={<Feed user={user}/>}
          />
          <Route 
            path='/users/me/post'element={<UserProfile user={user} isPost/>}
          />
          <Route 
            path='/users/me/favs'element={<UserProfile user={user}/>}
          />
          <Route 
            path='/users/:uid'element={<Profile user={user}/>}
          />
          <Route 
            path='/*'element={<Navigate replace to="/"/>}
          />
          <Route 
            path="/users/me/*" element={<Navigate replace to="/users/me/post" />} 
          />
      </Routes>
     
    </div>
  );
};

export default App;
