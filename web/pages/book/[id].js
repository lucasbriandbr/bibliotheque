import Head from 'next/head'
import { useState, useEffect } from 'react'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"
import BooksStatik from '../../constantes/BooksStatik'

export default function booksId() {
    return(
        <>
        <Head>
            <title>product.title - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className={`flex h-[100vh] items-center justify-center`}>

                <p>Bienvenue sur la page du livre productId</p>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}