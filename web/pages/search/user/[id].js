import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { searchUser } from '../../../fonctionsutiles/connexion/useCaseConnexion'
import { useRouter } from 'next/router'

//  Import des objets

import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import UserProfile from '../../../components/UserProfile'

//  Import des constantes

import NavLinks from "../../../constantes/NavLinks"
import FootLinks from "../../../constantes/FootLinks"

export default function user({users,query}) {
    
    const [ input, setInput ] = useState(query)

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

                <div className='flex flex-col p-4 gap-4'>
                    {users!==false&&users.length!==0?
                        users.map((user)=>{return(
                            <UserProfile key={user.name} name={user.name} abonnes={user.User_A.length} books={user.lib.length} />
                        )})
                    :
                    <p className='text-sm'>L'utilisateur @{query} n'existe pas ou plus. Veuillez vérifier l'orthographe, puis réessayer.</p>
                    }
                </div>

            </div>

            <Footer elements={FootLinks()}/>
        </>
    )
}

export async function getServerSideProps(context){
    const { id } = context.query
    return await searchUser(id)
    .then((userInfos) => {
        return {
            props: {
                query: id,
                users: userInfos||false,
            }
        }
    })
    .catch((error) => {
        return {
            props: {
                idUser: id,
            }
        }
    })
}