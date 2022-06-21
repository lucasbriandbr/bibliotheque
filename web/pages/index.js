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

      <div className='flex flex-row pt-8 pr-8 pl-8 w-full items-center justify-center'>
        <h1>Nouveautés</h1>
      </div>

      <div className={`flex flex-row bg-white text-white p-8 gap-8 overflow-x-scroll overflow-y-hidden`}>
        
        <BigCard src={Books()[0].imgsrc} title={Books()[0].title} author={Books()[0].author} serie={Books()[0].serie} tome={Books()[0].tome} note={Books()[0].note} sku={Books()[0].sku}/>
        
        <BigCard src={Books()[1].imgsrc} title={Books()[1].title} author={Books()[1].author} serie={Books()[1].serie} tome={Books()[1].tome} note={Books()[1].note} sku={Books()[1].sku}/>
        
        <BigCard src={Books()[2].imgsrc} title={Books()[2].title} author={Books()[2].author} serie={Books()[2].serie} tome={Books()[2].tome} note={Books()[2].note} sku={Books()[2].sku}/>
        
        <BigCard src={Books()[3].imgsrc} title={Books()[3].title} author={Books()[3].author} serie={Books()[3].serie} tome={Books()[3].tome} note={Books()[3].note} sku={Books()[3].sku}/>
        
        <BigCard src={Books()[4].imgsrc} title={Books()[4].title} author={Books()[4].author} serie={Books()[4].serie} tome={Books()[4].tome} note={Books()[4].note} sku={Books()[4].sku}/>

      </div>

      <Footer elements={FootLinks()}/>

    </>
  )
}