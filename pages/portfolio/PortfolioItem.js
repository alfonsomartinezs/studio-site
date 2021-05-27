import Link from 'next/link'
const PortfolioItem = ({ imageClass,landscape,title,date }) => {
  return (
    <div className={`portfolio-item-container portfolio-${imageClass} ${landscape ? "landscape": ""}`} >
      <a  className="portfolio-link" href="/">
        <h3>{title}</h3>
        <p>{date}</p>
      </a>
    </div>
  );
}
 
export default PortfolioItem;