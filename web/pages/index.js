import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

      <div className={`flex items-end justify-center w-full min-h-[68vh] bg-[#F9F3EE] shadow-[rgba(_238,_230,_218,_0.9)_0px_-5vh_50px_-50px_inset]`}>
        
        <div className={`flex flex-row items-center justify-center`}>
          
          <img src={`https://imgs.search.brave.com/Drg5DEFQRMlQE2qN6gtThT3DIqJ_yKAuSS2VeeHL0iE/rs:fit:686:1080:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC83OS80My84Yy83/OTQzOGM2NmYzYzJm/MzY4YjQwZDA0MDc2/NDY5ZDFmNS5qcGc`} className={`h-[50vh] w-[30vh] ${styles.couverture}`}/>

          <div className={`${styles.couvertureext}`}><div className={`${styles.tranche}`}></div></div>

        </div>

      </div>

      <div className={`min-h-[7.5vh] bg-[#EEE7DC] shadow-[rgba(_232,_223,_207,_1)_0px_7.5vh_50px_-50px_inset]`}>

      </div>

      <div className={`min-h-[4.5vh] bg-[#F2EEE9]`}>

      </div>

      <div className={`min-h-[20vh] bg-white shadow-[rgba(_188,_177,_158,_1)_0px_12vh_200px_-50px_inset]`}>

      </div>

      <Footer elements={FootLinks()}/>

    </>
  )
}
