import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import logo from './logo.png';
import logoText from './images/logoText.png';
import { signInPopup, auth, provider } from "./firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
 
function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => { 
          signInPopup(auth, provider)
          .then((result) => {
              dispatch({
                  type: actionTypes.SET_USER,
                  user: result.user,
              });
          })   
          .catch((error) => alert(error.message));
    };
   return (
      <div className="login">
         <div className="login-logo">
            <img src={logo} alt="" /> 
            <img src={logoText} alt="" />
         </div>   
         <Button type="submit" onClick={signIn}>Sign In</Button>
      </div>
   )
}

export default Login;
