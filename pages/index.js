import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className="home-container container hero-container">
        <div>
          <h1>Project Paramour</h1>
          <p>
            Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
          </p>
          <a className="button" href="/portfolio">
            <span>See our Portfolio</span>
              <img src="/assets/icon-arrow.svg"/>     
            </a>
        </div>
        
      </section>
    

      <section className="container">
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
      

      <section className="container">
        <h2>Featured</h2>
        <ul>
          <li>
              <h3>Project Title</h3>
              <p>See More</p>
          </li>

          <li>
              <h3>Project Title</h3>
              <p>See More</p>
          </li>

          <li>
              <h3>Project Title</h3>
              <p>See More</p>
          </li>
        </ul>

        <a className="button" href="/about">
          <span>See All</span>
          <img src="/assets/icon-arrow.svg" />  
        </a>



      </section>


    </>
    

    
  )
}
