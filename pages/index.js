import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam quasi incidunt ad, quis cumque laboriosam hic possimus dolore enim omnis doloremque esse consectetur! Vitae ad quasi quod pariatur aspernatur!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam quasi incidunt ad, quis cumque laboriosam hic possimus dolore enim omnis doloremque esse consectetur! Vitae ad quasi quod pariatur aspernatur!</p>
        <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
