import Head from 'next/head'
import Link from 'next/link'

//  Import des objets

import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'

//  Import des constantes

import NavLinks from "../../../constantes/NavLinks"
import FootLinks from "../../../constantes/FootLinks"

export default function Users(){
    return(
        <>
            <Head>
                <title>Admin - Alexandria</title>
                <meta name="description" content="Written with Heart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>
            
            <div className='h-[calc(100vh-40px)]'>

                <div className={`flex flex-col text-sm mt-4 p-4 gap-4`}>

                    <h3 className='block font-medium text-2xl'>Gestion des Utilisateurs</h3>
                    
                    <Link href={`/admin`}><a className='text-xs text-gray-500 cursor-pointer underline'>Retour à l'espace administrateur</a></Link>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}