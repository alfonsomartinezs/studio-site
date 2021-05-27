import Image from "next/image";
import AboutUser from "../components/AboutUser"
import Head from 'next/head'
const About = () => {
  return (
    <>
            <Head>
        <title>Dot Art Studio | About Us</title>
      </Head>
      <section className="about-hero-section">
        <div className="about-image-container">
          <Image className="about-hero-image" layout="fill" src="/assets/about/spray-cans.jpg" alt="an array of color spray paint cans"/>
        </div>

        <h1 className="large light text-center about-text">About</h1>
        <div className="about-hero-text">
          <div>
          <h2>Meet your team!</h2>
          <p>
              Our small team of artists will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
          </p>
          </div>
          
        </div>
      </section>
      <div className="container">
        <section className="heritage-section">
          <div>
        <h2>Our Heritage</h2>
        <p>
          Founded in 2020, we started as a couple of artists with two very different backgrounds -- Alexis with her extensive experience in fine arts, Ayo with years of graffiti art under his belt. Our complimentary skills and drive to make art accessible turned Dot into one of the most sought after mural companies in the country.
        </p>

        <p>
          We specialize in Urban Design with an eye towards history and sustainability. We consider every detail from every surrounding element to inform our designs. 
        </p>
        
        <p>
              Our small team of world-class professionals provides input on every project.
        </p>
          </div>
          <img className="heritage-image" src="/assets/portfolio/mural-heritage.jpg" alt="a colorfully lit carousel at night"/>
        



      </section>


      <section className="designers-section">

        <h2 className="designers-header">The Designers</h2>
        <AboutUser
          name="Alexis Reyna"
          imagePath="/assets/about/avatar-alexis.jpg"
          role="Lead Designer"
          clipClass = "clip-bottom-left"
        />

        <AboutUser
          name="Ayo Smith"
          imagePath="/assets/about/avatar-ayo.jpg"
          role="Lead Designer"
         clipClass = "clip-top-right"
        />

        <AboutUser
          name="Jackson Rourke"
          imagePath="/assets/about/avatar-steven.jpg"
          role="Designer"
          clipClass = "clip-top-left"
        />

        <AboutUser
          name="Maria Simpson"
          imagePath="/assets/about/avatar-maria.jpg"
          role="Designer"
          clipClass = "clip-bottom-right"
        />
        

      </section>



      </div>
      </>
  );
}
 
export default About;