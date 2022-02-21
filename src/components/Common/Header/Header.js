import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import  ThemeContext  from '../../../context/Themecontext'
import logo192 from '../../../assets/png/logo192.png';
import "./header.css";
const Header = () => {
  //the theme is changed by using the useContext hook whose argument is the themeContext imported from the Themecontext
    const {toggleTheme} = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="header-title">
      <Link to="/">
          <img src={logo192} alt="" className="headerTitleImage"/>
        </Link>
        </div>
      <div className="header-nav">
        <Link to="/signup" className="links">
          <Button variant="outlined">Signup</Button>
        </Link>
        <Link to="login" className="links">
          <Button variant="outlined">Login</Button>
        </Link>
        <button onClick={toggleTheme} className="links">Click Me</button>
      </div>
    </div>
  );
};

export default Header;
