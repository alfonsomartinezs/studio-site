import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="layout-container">
      <Component {...pageProps} />
      </div>
    </Layout>


  )
}

export default MyApp
