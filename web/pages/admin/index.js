import Head from 'next/head'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

export default function admin() {
    return(
        <>
        <Head>
            <title>Admin - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className={`flex h-[100vh] items-center justify-center`}>

                <p>Bienvenue dans l'espace administrateur</p>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}