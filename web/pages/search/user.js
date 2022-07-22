import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

export default function user() {
    return(
        <>
            <Head>
                <title>Search user - Alexandria</title>
                <meta name="description" content="Written with Heart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar elements={NavLinks()}/>
        </>
    )
}