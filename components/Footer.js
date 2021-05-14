import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <Link href="/">DOT</Link>
      </div>
      <ul className="footer-link-list">
        <li className="footer-link-item"><Link href="/portfolio">Portfolio</Link></li>
        <li className="footer-link-item"><Link href="/about">About Us</Link></li>
        <li className="footer-link-item"><Link href="/contact">Contact</Link></li>
        </ul>
    </footer>
  );
}
 
export default Footer;