import Head from 'next/head'
import { useState } from 'react'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

export default function Connexion() {

    const [ state , setState ] = useState(true)

    return(
        <>
        <Head>
            <title>Connexion - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className={`flex flex-row h-[95vh] w-full bg-white`}>
                
                <div className={`hidden md:flex lg:flex h-full w-full border-r-[1px] border-gray-300 justify-center items-center`}>
                   <img src={`/img/bibliotheque-5.webp`} alt={`Une couverture de livre`} className={`flex h-full w-auto object-contain`}/>
                </div>

                <div className={`flex flex-col h-full w-full p-4 items-center justify-center p-[10vw]`}>
                    
                    {state?
                    <>
                        <h3 className='block font-medium text-2xl px-5 py-2.5 mb-4'>Sign Up</h3>
                        <input type="text" className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mb-4 focus:outline-none" placeholder='Mail'/>
                        <input type="password" className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mb-4 focus:outline-none" placeholder='Password'/>
                        <button type="button" className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-4">Connect</button>
                    </>
                    :
                    <>
                        <h3 className='block font-medium text-2xl px-5 py-2.5 mb-4'>Sign In</h3>
                        <input type="text" className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mb-4 focus:outline-none" placeholder='Mail'/>
                        <input type="password" className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mb-4 focus:outline-none" placeholder='Password'/>
                        <button type="button" className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mb-4">Connect</button>
                    </>
                    }
                    <p className='flex flex-col text-center font-normal text-xs px-5 py-2.5 mb-4'>{state?"Pas encore inscrit ?":"Déjà inscrit ?"}<button type="button" className='block font-medium text-xs mt-2 underline' onClick={()=>{setState(!state)}}>{state?"Sign In":"Sign Up"}</button></p>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}