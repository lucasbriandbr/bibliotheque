import Head from 'next/head'
import { useState, useEffect } from 'react'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"
import BooksStatik from '../../constantes/BooksStatik'

export default function booksId({idUser}){
    return(
        <>
        <Head>
            <title>{idUser} - Alexandria</title>
            <meta name="description" content="Written with Heart" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <NavBar elements={NavLinks()}/>

            <div className='flex flex-row w-full'>

                <img src={`/img/book-banner-${Math.floor(Math.random()*6)}.png`} alt={`Photo de profil de ${idUser}`} className={`rounded-full h-28 w-28 m-4`}/>

                <div className='m-4 h-28 w-full flex flex-col'>

                    <p>{idUser}</p>

                    <div className='w-full h-full grid grid-cols-3 items-center justify-center'>

                        <div className='w-full flex flex-col items-center'>
                            <p>Livres</p>
                            <p>12</p>
                        </div>

                        <div className='w-full flex flex-col items-center'>
                            <p>Avis</p>
                            <p>23</p>
                        </div>

                        <div className='w-full flex flex-col items-center'>
                            <p>Amis</p>
                            <p>34</p>
                        </div>

                    </div>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}

export async function getServerSideProps(context){
    const { id } = context.query
    if(id.indexOf('@')===(-1)){
        return{
            redirect: {
                destination: `/user/@${id.toLowerCase()}`,
                permanent: true,
            },
            props:{
                idUser:id,
            }
        }
    }else{
        if(id===id.toLowerCase()){
            return {
                props:{
                    idUser:id,
                }
            }
        }else{
            return {
                redirect: {
                    destination: `/user/${id.toLowerCase()}`,
                    permanent: true,
                },
                props:{
                    idUser:id,
                }
            }
        }
    }
}