import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexandria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar/>
    </div>
  )
}