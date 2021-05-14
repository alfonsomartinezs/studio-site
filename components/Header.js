import { useState } from "react";
import Link from 'next/link'
const Header = () => {
  const [show,setShow] = useState(false)
  const toggleMenu = () => {
    setShow(!show)
  }

  const closeMenu = () => {
    setShow(false)
  }


  return (
    <header>
      <div className="container">
      <span onClick={ closeMenu}><Link href="/" >LOGO</Link></span>
      <span className="menu-toggler" onClick={toggleMenu}>{ show ? "Close": "Menu"}</span>
      <nav className={ show ? "show": ""}>
        <ul className="nav-list">
          <li className="nav-list-item" onClick={closeMenu}><Link href="/portfolio">Portfolio</Link></li>
          <li className="nav-list-item" onClick={closeMenu}><Link href="/about">About Us</Link></li>
          <li className="nav-list-item" onClick={closeMenu}><Link href="/contact">Contact</Link></li>
        </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;