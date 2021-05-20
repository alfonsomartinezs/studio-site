import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  return (
    <div className="container portfolio-gallery">
      <PortfolioItem imageClass="fancy" title="We can be Fan¢y" date="December 2013"/>

      <PortfolioItem imageClass="mrm" title="We can be Fan¢y" date="December 2013"/>
      
      <PortfolioItem imageClass="woman" landscape="true" title="We can be Fan¢y" date="December 2013"/>
      <PortfolioItem imageClass="cartoon" title="We can be Fan¢y" date="December 2013"/>
      <PortfolioItem imageClass="raccoon" title="We can be Fan¢y" date="December 2013"/>
      <PortfolioItem imageClass="carousel" title="We can be Fan¢y" date="December 2013"/>
      <PortfolioItem imageClass="guerra" landscape="true" title="We can be Fan¢y" date="December 2013"/>

      <PortfolioItem imageClass="lion" landscape="true" title="We can be Fan¢y" date="December 2013"/>
      <PortfolioItem imageClass="mind" title="We can be Fan¢y" date="December 2013"/>
      
      

  </div> );
}
 
export default Portfolio;