import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        DOT
      </div>
      <div className="container">
      <ul className="footer-link-list">
        <li className="footer-link-item"><Link href="/portfolio">Portfolio</Link></li>
        <li className="footer-link-item"><Link href="/about">About Us</Link></li>
        <li className="footer-link-item"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
 
export default Footer;