import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { searchUser } from '../../../fonctionsutiles/connexion/useCaseConnexion'
import { useRouter } from 'next/router'

//  Import des objets

import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

//  Import des constantes

import NavLinks from "../../../constantes/NavLinks"
import FootLinks from "../../../constantes/FootLinks"

export default function user() {

    const [ input, setInput ] = useState()

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
                <div className={`flex flex-row text-sm mt-4 p-4 gap-4`}>

                    <input id={'recherche'} className={`flex px-5 py-2.5 w-full border-black border rounded-lg focus:outline-none`} placeholder={`Search user...`} value={input} onChange={()=>setInput(document.getElementById('recherche').value.toLowerCase())}/>

                    <button className={`flex px-5 py-2.5 border-black border rounded-lg`} onClick={()=>router.push(`/search/user/${document.getElementById('recherche').value}`)}>Search</button>

                </div>
            </div>

            <Footer elements={FootLinks()}/>
        </>
    )
}