import React,{useContext} from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Header from "./components/Common/Header/Header";
import "./App.css";
import ThemeContext from "./context/Themecontext";
function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
