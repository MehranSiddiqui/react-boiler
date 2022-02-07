import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookAuth = () => {
  const authId = process.env.REACT_APP_FACEBOOK_APP_ID;
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
console.log(authId);
  const requestResponse = (res) => {
   if(res.accessToken){
     console.log(res)
     setUser(res.name);
     setLogin(true);
   }else{
     console.log(res);
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
