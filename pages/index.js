import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <>
      <section className="home-container container hero-container">
        <div>
          <h1>Project Paradise</h1>
          <p>
            Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. Coming soon.
          </p>
          <a className="button" href="/portfolio">
            <span>See our Portfolio</span>
              <img src="/assets/icon-arrow.svg"/>     
            </a>
        </div>
        
      </section>
    

      <section className=" welcome-container container">
        <h1 className="large light text-center welcome-header">Welcome</h1>

        <div>
          <h2>Welcome to Dot Studio</h2>
        <p>
          We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
        </p>

        <p>
          Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
        </p>
        
        <p>
          We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
        </p>
        </div>
        <img className="welcome-image" src="/assets/portfolio/mural-raccoon.jpg"/>

      </section>
      

      <section className="container hero-container small-team-container">
        <div>
        <h2>Small team, big ideas</h2>
        <a className="button" href="/about">
          <span>About Us</span>
            <img src="/assets/icon-arrow.svg"/>     
        </a>
        </div>
        
      </section>
      

      <section className="container feature-container">
        <h2>Featured</h2>

        <Link href="/portfolio">
          

          <div className="featured featured-project-del-sol">
          <div>    
          <div>
            <h3>We can be Fan¢y</h3>
            <p>View All Projects</p>
          </div>
          </div>
          <h1 className="large feature-number">1</h1>
          
          </div>
        </Link>
        <Link href="/portfolio">
        <div className="featured featured-mrn-hand">
          <div>
          <div>
            <h3>MRN</h3>
            
            <p>View All Projects</p>
            </div>
          </div>
          <h1 className="large feature-number">2</h1>
          </div>
        </Link>
        <Link href="/portfolio">
        <div className="featured featured-cartoon-prototype">
          <div>
            <div>
              <h3>Cartoon Jux</h3>
            <p>View All Projects</p>
            </div>
          </div>
          <h1 className="large feature-number">3</h1>
          </div>
        </Link>
        
        <a className="button feature-button" href="/about">
          <span>See All</span>
          <img src="/assets/icon-arrow.svg" />  
        </a>



      </section>


    </>
    

    
  )
}
