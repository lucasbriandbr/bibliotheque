import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

//  Import des functions

import inscriptionErrors from '../../fonctionsutiles/connexion/inscription'
import connexionErrors from '../../fonctionsutiles/connexion/connexion'
import { register } from '../../fonctionsutiles/connexion/useCaseConnexion'
import getError from '../../constantes/Errors'

export default function Connexion() {

    // const [ state , setState ] = useState(false)

    const [ mail1 , setMail1 ] = useState("")
    const [ psswd1 , setPsswd1 ] = useState("")
    const [ mail2 , setMail2 ] = useState("")
    const [ psswd2 , setPsswd2 ] = useState("")
    const [ psswdConfirm , setPsswdConfirm ] = useState("")
    const [ name , setName ] = useState("")

    const [ error1 , setError1 ] = useState()
    const [ error2 , setError2 ] = useState()
    
    const [ loader1 , setLoader1 ] = useState(false)
    const [ loader2 , setLoader2 ] = useState(false)

    const router = useRouter()
    const [ isUserConnected , setIsUserConnected ] = useState(false)

    useEffect(() => {if(isUserConnected){router.push(`/`)}},[isUserConnected])
    
    useEffect(() => {
        if(error2!=undefined&&error2.length===0){
            setLoader2(true)
            register(mail2.toLowerCase(),psswd2,name.toLowerCase())
                .then(res => {
                    if(res.retour=='ok'){setIsUserConnected(true)}else{setLoader2(false),setError2(getError(res.toString())),console.log(res)}
                })
                .catch(err => {})
        }
    },[error2])

    return(
        <>
        <Head>
            <title>Connexion - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className={`flex flex-row h-[100%] w-full bg-white`}>
                
                <div className={`hidden lg:flex border-r-[1px] border-gray-300 justify-center items-center`}>
                   <img src={`/img/bibliotheque-5.webp`} alt={`Une couverture de livre`} className={``}/>
                </div>

                <div className={`flex flex-col h-full w-full p-8 items-center justify-center`}>

                    <div className={`h-full md:w-1/2 lg:w-1/2 items-center justify-center`}>                        

                        <h3 className='block font-medium text-2xl mt-4'>Connexion</h3>
                        <p className={`text-xs w-full font-medium mt-4`}>Dis, tu traines souvent dans le coin ? Il me semble t&apos;avoir déjà vu passer dans le coin...</p>
                        <input type="text" id='Email1' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Mail' required onChange={()=>{setMail1(document.getElementById('Email1').value)}}/>
                        <input type="password" id='Psswd1' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Password' required onChange={()=>{setPsswd1(document.getElementById('Psswd1').value)}}/>
                        <button className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 mt-4 transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>handleConnect()}>{loader1?<Loader/>:"Se connecter"}</button>
                        {error1}

                        <h3 className='block font-medium text-2xl mt-4'>Inscription</h3>
                        <p className={`text-xs w-full font-medium mt-4`}>On ne s&apos;est jamais vus, j&apos;aurai tenté. Mais on a hâte de te rencontrer !</p>
                        <input type="text" id='Email2' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Mail' required onChange={()=>{setMail2(document.getElementById('Email2').value),document.getElementById('Email2').value=document.getElementById('Email2').value.toLowerCase()}}/>
                        <input type="text" id='Name' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Name' required onChange={()=>{setName(document.getElementById('Name').value),document.getElementById('Name').value=document.getElementById('Name').value.toLowerCase()}}/>
                        <input type="password" id='Psswd2' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Password' required onChange={()=>{setPsswd2(document.getElementById('Psswd2').value)}}/>
                        <input type="password" id='PsswdConfirm' className="block w-full text-gray-900 rounded-lg border-[1px] border-black text-sm px-5 py-2.5 mt-4 focus:outline-none" placeholder='Confirm password' required onChange={()=>{setPsswdConfirm(document.getElementById('PsswdConfirm').value)}}/>
                        <p className={`text-xs w-full font-medium mt-4`}>Votre mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.</p>
                        <button className="block w-full border-[1px] border-black focus:outline-none mt-4 font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100" onClick={()=>handleRegister()}>{loader2?<Loader/>:"S'enregistrer"}</button>
                        {error2}

                    </div>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )

    function handleConnect() {
        setError1(connexionErrors(mail1.toLowerCase(), psswd1))
        if(error1!=undefined&&error1.length===0){

        }
    }

    function handleRegister(){setError2(inscriptionErrors(mail2,psswd2,psswdConfirm))}

}