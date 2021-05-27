import PortfolioItem from "./PortfolioItem"
import Head from 'next/head'
const Portfolio = () => {
  return (
    <>
            <Head>
        <title>Dot Art Studio | Portfolio</title>
      </Head>
    <div className="container portfolio-gallery">
      <PortfolioItem imageClass="fancy" title="We can be Fan¢y" date="December 2013"/>

      <PortfolioItem imageClass="mrm" title="MRN" date="December 2013"/>
      
      <PortfolioItem imageClass="woman" landscape="true" title="Parking" date="December 2013"/>
      <PortfolioItem imageClass="cartoon" title="Cartoon Jux" date="December 2013"/>
      <PortfolioItem imageClass="raccoon" title="Scavenger" date="December 2013"/>
      <PortfolioItem imageClass="carousel" title="Icons" date="December 2013"/>
      <PortfolioItem imageClass="guerra" landscape="true" title="Guerra" date="December 2013"/>

      <PortfolioItem imageClass="paradise" landscape="true" title="Pradise" date="December 2013"/>
      <PortfolioItem imageClass="mind" title="Autumn" date="December 2013"/>
      
      

      </div>
  </>);
}
 
export default Portfolio;