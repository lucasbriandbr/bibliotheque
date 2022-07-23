import Head from 'next/head'
import Link from 'next/link'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"

export default function Admin() {
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

                    <h3 className='block font-medium text-2xl'>Espace Administrateur</h3>
                    
                    <Link href={`/admin/stats`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Statistiques</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/users`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Utilisateurs</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/books`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Livres</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/partner-book-store`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Librairies partenaires</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/partner-authors`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Auteurs partenaires</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/error`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Signalement d'une erreur</a>
                        </div>
                    </Link>
                    
                    <Link href={`/admin/bug`}>
                        <div className='flex px-5 py-2.5 border-black border rounded-lg cursor-pointer'>
                                <a className='text-xs no-underline'>Signalement d'un bug</a>
                        </div>
                    </Link>

                </div>

            </div>

            <Footer elements={FootLinks()}/>

        </>
    )
}