import Head from 'next/head'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"
import Books from '../../constantes/Books'

export default function Search() {

    function research(value) {
        console.log(`Changement dans la barre de recherche `+value)
    }

    return(
        <>
        <Head>
            <title>Recherche - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className={`flex flex-col`}>

                <div className={`flex h-[45vh] bg-black bg-[url('/img/book-2.webp')] text-white items-center justify-center bg-contain bg-no-repeat bg-center`}></div>

                <div className={`flex flex-row items-center w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white self-center rounded-lg shadow-lg -translate-y-2/4 p-4 gap-[15px]`}>

                    <svg className={`w-[16px] h-[16px] text-gray-500`} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path></svg>

                    <input className={`flex w-full focus:outline-none`} placeholder={`Search...`} onChange={()=>research()}/>

                </div>

                <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 min-h-[55vh] bg-white text-white p-8 gap-8`}>

                    {Books().map((book)=>{return(
                        <Card key={book.imgsrc} src={book.imgsrc} title={book.title} author={book.author} serie={book.serie} tome={book.tome} note={book.note}/>
                    )})}

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}