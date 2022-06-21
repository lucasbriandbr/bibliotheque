import Head from 'next/head'

//  Import des objets

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BigCard from '../components/BigCard'

//  Import des constantes

import NavLinks from "../constantes/NavLinks"
import FootLinks from "../constantes/FootLinks"
import Books from "../constantes/Books"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Alexandria</title>
        <meta name="description" content="Written with Heart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar elements={NavLinks()}/>

      <div id='banner' className={`flex h-[50vh] text-white bg-black items-center justify-center`}>

        <p>Bannière d&apos;accueil</p>

      </div>

      <div className={`flex flex-row bg-white text-white p-8 gap-8 overflow-x-scroll`}>
        
        <BigCard src={Books()[0].imgsrc} title={Books()[0].title} author={Books()[0].author} serie={Books()[0].serie} tome={Books()[0].tome} note={Books()[0].note} sku={Books()[0].sku}/>
        
        <BigCard src={Books()[1].imgsrc} title={Books()[1].title} author={Books()[1].author} serie={Books()[1].serie} tome={Books()[1].tome} note={Books()[1].note} sku={Books()[1].sku}/>
        
        <BigCard src={Books()[1].imgsrc} title={Books()[1].title} author={Books()[1].author} serie={Books()[1].serie} tome={Books()[1].tome} note={Books()[1].note} sku={Books()[1].sku}/>

      </div>

      <Footer elements={FootLinks()}/>

    </>
  )
}