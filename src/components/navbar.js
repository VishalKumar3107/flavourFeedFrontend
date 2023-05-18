import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../images/logo.png";
import "../allcss/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleInfo,
  faCirclePlus,
  faEnvelopeCircleCheck,
  faHeart,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useGetUsername } from "../hooks/useGetUsername";
import { useState } from "react";

const linkStyle = {
  padding: '8px 10px',
  color: '#353746',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '4px',
  margin: '0 8px',
  fontSize: '24px'
};
const linkStylenav = {
  padding: '8px 10px',
  color: '#353746',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '4px',
  margin: '0 8px',
  fontSize: '22px'
};


export const Navbar = () => {
  const username = useGetUsername();
  const [user, setUser]= useState("");
  const [cookies, setCookies] = useCookies(["access_token"]);
  const nav = useNavigate();
  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    nav("/auth");
  };
  const handleuserclick = (username) => {
    setUser(username);
    nav(`/recipes/user/${username}`);
  };
  return (
    <div className="containerNavbar">
      <div className="logo">
        <img onClick={()=>nav("/")} src={logo} />
        {cookies.access_token ? <h2 onClick={() => handleuserclick(username)}>Welcome, {username}</h2> : null}
      </div>
      <div className="logindiv">
      <Link to="/" style={linkStyle}><span>HOME</span><FontAwesomeIcon className="iconnavone" icon={faHome} /></Link>
      <Link to="/about" style={linkStyle}><span>ABOUT</span><FontAwesomeIcon className="iconnavone" icon={faCircleInfo} /></Link>
      <Link to="/contact" style={linkStyle}><span>CONTACT</span><FontAwesomeIcon className="iconnavone" icon={faEnvelopeCircleCheck} /></Link>
        {!cookies.access_token ? (
          <Link to="/auth" style={linkStylenav}>LOGIN/REGISTER</Link>
        ) : (
          <>
            <Link to="/create" style={linkStyle}><span>ADD</span><FontAwesomeIcon className="iconnavone" icon={faCirclePlus} /></Link>
            <Link to="saved" style={linkStyle}><span>SAVED</span><FontAwesomeIcon className="iconnavtwo" icon={faHeart} /></Link>
            <button onClick={handleLogout}>LOGOUT</button>
          </>
        )}
      </div>
    </div>
  );
};
