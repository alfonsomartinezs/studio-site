import AboutUser from "../components/AboutUser"

const About = () => {
  return (
    <>
      <section className="about-hero-section">
        <img src="/assets/about/image-hero.jpg" />
        <div className="about-hero-text">
          <h2>Meet your team!</h2>
          <p>
            Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
          </p>
        </div>
      </section>
      <div className="container">
      <section>
        <h2>Our Heritage</h2>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
        </p>

        <p>
          Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
        </p>
        
        <p>
          Our small team of world-class professionals provides input on every project.
        </p>
        



      </section>


      <section className="designers-section">

        <h2 className="designers-header">The Designers</h2>
        <AboutUser
          name="Alexis Reyna"
          imagePath="/assets/about/avatar-alexis.jpg"
          role="Lead Designer"
          
        />

        <AboutUser
          name="Ayo Smith"
          imagePath="/assets/about/avatar-ayo.jpg"
          role="Lead Designer"
          
        />

        <AboutUser
          name="Jackson Rourke"
          imagePath="/assets/about/avatar-steven.jpg"
          role="Designer"
          
        />

        <AboutUser
          name="Maria Simpson"
          imagePath="/assets/about/avatar-maria.jpg"
          role="Designer"
          
        />
        

      </section>



      </div>
      </>
  );
}
 
export default About;