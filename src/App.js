import React from 'react';
import './App.css';
import {  loginConGoogle } from './firebase';
//Components
import LoginPage from './Components/LoginPage/LoginPage';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import UserProfile from './Components/UserProfile/UserProfile';



function App() {

  return (
    <div className="App">
      {/*<LoginPage/>*/}
      {/*<Feed/>*/}
      <Profile/>
      {/*<UserProfile/>*/}
      
     
    </div>
  );
};

export default App;
