import Head from 'next/head'

//  Import des objets

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BigCard from '../components/BigCard'

//  Import des constantes

import NavLinks from "../constantes/NavLinks"
import FootLinks from "../constantes/FootLinks"
import BooksStatik from "../constantes/BooksStatik"

export default function Home() {

  return (
    <>
      <Head>
        <title>Home - Alexandria</title>
        <meta name="description" content="Written with Heart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar elements={NavLinks()}/>

      <div id='banner' className={`flex h-[65vh] overflow-hidden text-white bg-black items-center justify-center bg-[#1F1B23] bg-[url('/img/book-banner-3.png')] bg-contain bg-no-repeat bg-center`}></div>

      <div className={`flex flex-row p-8 w-full items-center justify-center uppercase police`}>
        <h1>Les mieux notés</h1>  {/* Comprend les meilleurs notes en fonction du plus grand nombre d'avis. Exemple : 5* et 10 avis passe derriere 5* et 200 avis */}
      </div>

      <div className={`flex flex-rowbg-white text-white p-4 gap-4 overflow-x-scroll`}>

        {BooksStatik().sort(function(a,b){return(b.note - a.note)}).slice(0,5).map((book)=>{return(
          <BigCard key={book.sku} src={book.imgsrc} title={book.title} author={book.author} serie={book.serie} tome={book.tome} note={book.note} sku={book.sku}/>
        )})}

      </div>

      <Footer elements={FootLinks()}/>

    </>
  )
}