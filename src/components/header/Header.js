import React, { useState } from 'react'
import './header.css';

const Header = () => {
  window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    if (this.scrollY >= 80 ) header.classList.add
    ("scroll_header");
    else header.classList.remove("scroll_header");

})

  const[Toggle, showMenu]=useState(false);
  const[, setActiveNav]=useState("#home");

  return (
   <header className="header">
    <nav className='nav container'>
      <a href='index.html' className='nav_logo'>ALok</a>
      <div className={Toggle?"nav_menu show_menu":"nav_menu" }>
        <ul className='nav_list grid'>
          <li className='list_item'>
            <a href='#home' onClick={()=>setActiveNav("#home")} className={setActiveNav === '#home'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-estate nav_icon'></i>Home</a> 
          </li>
          <li className='list_item'>
            <a href='#about' onClick={()=>setActiveNav("#about")} className={setActiveNav === '#about'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-user nav_icon'></i>About</a> 
          </li>
          <li className='list_item'>
            <a href='#skills' onClick={()=>setActiveNav("#skills")} className={setActiveNav === '#skills'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-file-alt nav_icon'></i>Skills</a> 
          </li>
          <li className='list_item'>
            <a href='#services' onClick={()=>setActiveNav("#services")} className={setActiveNav === '#services'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-briefcase-alt nav_icon'></i>Services</a> 
          </li>
          <li className='list_item'>
            <a href='#portfolio' onClick={()=>setActiveNav("#portfolio")} className={setActiveNav === '#portfolio'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-scenery nav_icon'></i>Portfolio</a> 
          </li>
          <li className='list_item'>
            <a href='#contact' onClick={()=>setActiveNav("#contact")} className={setActiveNav === '#contact'?'nav_link active_link':'nav_link'}>
              <i className='uil uil-message nav_icon'></i>Contact</a> 
          </li>
        </ul>

        <i className='uil uil-times nav_close' onClick={()=>showMenu(!Toggle)}></i>
      </div>
      <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
        <i className='uil uil-apps nav_icon'></i>
      </div>
    </nav>
   </header>
  )
}

export default Header
