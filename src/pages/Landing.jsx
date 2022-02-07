import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Common/Card/Card";
import { Button } from "@mui/material";
import GoogleoAuth from "../Auths/Google-Auth/GoogleoAuth";
import FacebookAuth from "../Auths/Facebook-Auth/FacebookAuth";

const Landing = () => {
  return (
    <Card>
      <h3>Please Sign Up or Login</h3>
      <div className="landing-div">
        <div className="auths">
          <GoogleoAuth />
          <FacebookAuth />
        </div>

        <div className="pages-route">
          <Link to="/signup" className="links">
            <Button variant="outlined">Signup</Button>
          </Link>
          <Link to="login" className="links">
            <Button variant="outlined">Login</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Landing;
