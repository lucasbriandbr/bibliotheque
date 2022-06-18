import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

//  Import des functions

import inscription from '../../fonctionsutiles/inscription'

export default function Connexion() {

    const [ state , setState ] = useState(false)

    const [ mail , setMail ] = useState("")
    const [ psswd , setPsswd ] = useState("")
    const [ psswdConfirm , setPsswdConfirm ] = useState("")

    const [ error , setError ] = useState()

    const router = useRouter()

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

                    <h3 className='block font-medium text-2xl px-5 py-2.5 mt-4'>{state?"Inscription":"Connexion"}</h3>
                    <input type="text" id='Email' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Mail' required onChange={()=>{setMail(document.getElementById('Email').value)}}/>
                    <input type="password" id='Psswd' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Password' required onChange={()=>{setPsswd(document.getElementById('Psswd').value)}}/>
                    
                    {state?
                    <>
                        <input type="password" id='PsswdConfirm' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Confirm password' required onChange={()=>{setPsswdConfirm(document.getElementById('PsswdConfirm').value)}}/>
                    <p className={`text-xs w-full font-medium mt-4`}>Votre mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.</p>
                        <button type="button" className="block w-full border-[1px] border-black focus:outline-none mt-4 font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>{setError(inscription(mail, psswd, psswdConfirm))}}>S&apos;enregistrer</button>
                        {error}
                    </>
                    :
                    <button type="button" className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4 transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>{router.push('/')}}>Se connecter</button>
                    }
                    <p className='flex flex-col text-center font-normal text-xs px-5 py-2.5 mt-4'>{state?"Déjà inscrit ?":"Pas encore inscrit ?"}<button type="button" className='block font-medium text-xs mt-2 underline' onClick={()=>{setState(!state)}}>{state?"Connexion":"Inscription"}</button></p>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}