import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { searchUser } from '../../../fonctionsutiles/connexion/useCaseConnexion'
import { useRouter } from 'next/router'

//  Import des objets

import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import Loader from '../../../components/Loader'

//  Import des constantes

import NavLinks from "../../../constantes/NavLinks"
import FootLinks from "../../../constantes/FootLinks"

//  Import des styles

import styles from "../../../styles/Error.module.css"

export default function user() {
    
    const [ input, setInput ] = useState('')
    const [ loader, setLoader ] = useState(false)
    const [ error, setError ] = useState('')

    const router = useRouter()

    return(
        <>
            <Head>
                <title>Search user - Alexandria</title>
                <meta name="description" content="Written with Heart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar elements={NavLinks()}/>
            
            <div className='h-[calc(100vh-40px)]'>

                <div className={`flex flex-row text-sm mt-4 pl-4 pt-4 pr-4 gap-4`}>

                    <input id={'recherche'} className={`flex px-5 py-2.5 w-full border-black border rounded-lg focus:outline-none`} placeholder={`Search user...`} value={input} onChange={()=>setInput(document.getElementById('recherche').value.toLowerCase())}/>

                    <button className={`flex p-3 border-black border rounded-lg`} onClick={()=>{input!==''?(setError(''),setLoader(true),router.push(`/search/user/${document.getElementById('recherche').value}`)):setError("This query isn't a valid query.")}}>{loader?<Loader/>:<svg className={`w-4 h-4 text-black`} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path></svg>}</button>

                </div>
                
                <div className='pl-4 pr-4'>
                    <p className={styles.errorInvalid}>{error}</p>
                </div>
                
            </div>

            <Footer elements={FootLinks()}/>
        </>
    )
}