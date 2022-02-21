import React from "react";
import Card from "../components/Common/Card/Card";
import GoogleoAuth from "../Auths/Google-Auth/GoogleoAuth";
import FacebookAuth from "../Auths/Facebook-Auth/FacebookAuth";
const Landing = () => {
  return (
    <div className="landing">
      <Card>
        <h1>Welcome to the Social Network</h1>
        <h3>Please Sign Up or Login</h3>
        <div className="landing-div">
          <div className="auths">
            <GoogleoAuth />
            <FacebookAuth />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Landing;
