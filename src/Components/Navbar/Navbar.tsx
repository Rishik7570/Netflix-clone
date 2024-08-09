import './navbar.css'
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { useEffect, useRef } from 'react';
import { signout } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate()

  const navref = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=100){
        navref.current?.classList.add('nav-dark')
      }else{
        navref.current?.classList.remove('nav-dark')
      }
    })
  })

  return (
    <div className="navbar" ref={navref}>
      <div className="navbar-left">
        <img src={logo} alt=""/>
        <ul className="flex">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons"/>
        <div className="navbar_profile">
          <img src={profile_img} className="profile" />
          <img src={caret} alt="" />
          <div className="dropdown">
            <p onClick={()=>{signout(); navigate('/login')}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
