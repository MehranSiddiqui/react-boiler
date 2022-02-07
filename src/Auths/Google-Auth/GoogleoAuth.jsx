import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";

const GoogleoAuth = () => {
  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);

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
