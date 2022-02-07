import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookAuth = () => {
  const authId = "704948947579271";
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);

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
