import Head from 'next/head'

//  Import des objets

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

//  Import des constantes

import NavLinks from "../constantes/NavLinks"
import FootLinks from "../constantes/FootLinks"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Alexandria</title>
        <meta name="description" content="Written with Heart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar elements={NavLinks()}/>

      <div className={`h-[100vh]`}></div>

      <Footer elements={FootLinks()}/>

    </>
  )
}
