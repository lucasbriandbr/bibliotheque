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

      <div className={`grid grid-cols-5 bg-white text-white pl-4 pr-4 pb-4 gap-4`}>

        {Books().sort(function(a,b){return(b.note - a.note)}).slice(0,5).map((book)=>{return(
          <BigCard key={book.sku} src={book.imgsrc} title={book.title} author={book.author} serie={book.serie} tome={book.tome} note={book.note} sku={book.sku}/>
        )})}

      </div>

      <Footer elements={FootLinks()}/>

    </>
  )
}