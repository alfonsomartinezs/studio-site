import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section>
      <h1>Project Paramour</h1>
      <p>
        Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
      </p>
      <a className="button">
         <span>See our Portfolio</span>
           <img src="/assets/icon-arrow.svg"/>     
      </a>
      </section>
  )
}
