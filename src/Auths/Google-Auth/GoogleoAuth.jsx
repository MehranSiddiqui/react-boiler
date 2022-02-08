import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";

const GoogleoAuth = () => {
  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);


  //The parameter of the function is the res object
  //The res object contains the access token and other information
  //The access token is used to access the Google API and get the user's profile information once the user has logged in
  const requestResponse = (res) => {
    if (res.accessToken) {
      setUser(res.profileObj.name);
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <div>
      {!login && (
        <GoogleLogin
          clientId={clientID}
          buttonText="Login"
          onSuccess={requestResponse}
          onFailure={requestResponse}
        />
      )}
      {login && <h1>Welcome {user}</h1>}
    </div>
  );
};

export default GoogleoAuth;
