import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookAuth = () => {
  const authId = process.env.REACT_APP_FACEBOOK_APP_ID;
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);


  //The parameter of the function is the res object
  //The res object contains the access token and other information
  //The access token is used to access the Facebook API and get the user's profile information once the user has logged in
  const requestResponse = (res) => {
   if(res.accessToken){
     setUser(res.name);
     setLogin(true);
   }else{
     setLogin(false);
   }
  };
  return (
    <>
      {!login && (
        <FacebookLogin
          appId={authId}
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile"
          callback={requestResponse}
          icon="fa-facebook"
        />
      )}
      {login && <h1>Welcome {user}</h1>}
    </>
  );
};

export default FacebookAuth;
