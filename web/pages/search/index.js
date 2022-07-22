import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import BigCard from '../../components/BigCard'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"
import BooksStatik from '../../constantes/BooksStatik'

export default function Search() {

    const [ state, setState ] = useState(1)
    const [ page, setPage ] = useState(1)
    const [ elements, setElements ] = useState(25)

    function research(value) {
        console.log(`Changement dans la barre de recherche `+value)
    }

    function calcPage() {
        if (BooksStatik().length%elements>0) {
            setPage(~~(BooksStatik().length/elements)+1)
        }else{
            setPage(~~(BooksStatik().length/elements))
        }
    }

    // useEffect(()=>{
    //     calcPage()
    // },[state])

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

                    {BooksStatik().slice((state-1)*elements,state*elements).map((book)=>{return(
                        <Card key={book.imgsrc} src={book.imgsrc} title={book.title} author={book.author} serie={book.serie} tome={book.tome} note={book.note} sku={book.sku}/>
                    )})}

                </div>

                <div className="flex flex-col items-center">
                    
                    <p className="text-sm text-gray-800">Page <span className="font-semibold text-gray-800">{state}</span> sur <span className="font-semibold text-gray-800">{page}</span></p>
                    
                    <div className="inline-flex mt-2 xs:mt-0 mb-8">

                        <button className="flex flex-row items-center justify-center py-2 px-4 mr-3 text-sm font-medium text-black bg-white rounded-lg border-[1px] border-black transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>{state!=1?setState(state-1):''}}>
                            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                            Previous
                        </button>

                        <button className="flex flex-row items-center justify-center py-2 px-4 text-sm font-medium text-black bg-white rounded-lg border-[1px] border-black transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>{state!=page?setState(state+1):''}}>
                            Next
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                    </div>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}