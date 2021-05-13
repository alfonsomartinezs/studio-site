import { useState } from "react";

const Header = () => {
  const [show,setShow] = useState(false)
  const toggleMenu = () => {
    setShow(!show)
  }
  console.log(show)
  return (
    <header className="container">
      <h3>LOGO</h3>
      <span onClick={toggleMenu}>Menu</span>
      <nav className={ show ? "show": ""}>
        <ul className="nav-list">
          <li className="nav-list-item">Portfolio</li>
          <li className="nav-list-item">About Us</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;