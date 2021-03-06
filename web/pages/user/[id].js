import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getUserInfos } from '../../fonctionsutiles/connexion/useCaseConnexion'

//  Import des objets

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import UserProfile from '../../components/UserProfile'
import LilBooks from '../../components/LilBooks'
import Loader from '../../components/Loader'

//  Import des constantes

import NavLinks from "../../constantes/NavLinks"
import FootLinks from "../../constantes/FootLinks"
import BooksStatik from '../../constantes/BooksStatik'

//  Import des fonctions

import hangLanguage from '../../fonctionsutiles/validateurs/hangLanguage'
import hangMonthFromIndex from '../../fonctionsutiles/validateurs/hangMonthFromIndex'

export default function BooksId({idUser,biography,website,language,age,creation,avis,abonnements,abonnes,librairie,challenge,exists}){

    const [ loader1, setLoader1 ] = useState(false)
    const [ loader2, setLoader2 ] = useState(false)
    const [ loader3, setLoader3 ] = useState(false)
    const [ loader4, setLoader4 ] = useState(false)

    let userName = idUser.replace('@','')[0].toUpperCase()+idUser.replace('@','').slice(1)
    let current = new Date()
    let createdat = new Date(creation)

    return(
        <>
        {exists!==false?
            <>
                <Head>
                    <title>{idUser} - Alexandria</title>
                    <meta name="description" content="Written with Heart" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
        
                <NavBar elements={NavLinks()}/>
                
                <div className='w-full flex lg:flex-row flex-col p-4 mt-4 gap-4'>

                    <div className='flex flex-col flex-1 lg:order-1 order-2 gap-4'>

                        <div className='flex flex-col rounded-lg border-[1px] border-gray-300 p-4'>

                            <p className='font-semibold mb-4'>{userName}&apos;s {current.getFullYear().toString()} Book Challenge</p>
                            
                            {challenge!==false&&challenge.length!==0?
                            <>
                                <p className='text-sm mb-4'>{userName} has read {challenge[0].books.length} books of their goal of {challenge[0].objectif}.</p>

                                <div className="w-full bg-gray-600 rounded-full h-1.5 dark:bg-gray-300 mb-4">
                                    <div className="bg-gray-200 h-1.5 rounded-full dark:bg-gray-700" style={{ width: Math.floor(((challenge[0].books.length)/(challenge[0].objectif))*100)+'%' }}></div>
                                </div>

                                <p className='text-sm text-gray-400'>{Math.floor(((challenge[0].books.length)/(challenge[0].objectif))*100)}%</p>
                            </>
                            :
                            <p className='text-sm'>{userName} is not participating in the challenge at the moment.</p>
                            }

                        </div>

                        <div className='lg:flex hidden flex-1 flex-col rounded-lg border-[1px] border-gray-300 p-4 gap-4'>

                            <p className='font-semibold'>{userName}&apos;s Favorite Books</p>
                        
                            {librairie!==false&&librairie.length!==0?
                                librairie.slice(0,3).map((book)=>{return(
                                    <LilBooks key={book.sku} src={book.imgsrc} title={book.title} author={book.author} sku={book.sku}/>
                                )})
                            :
                            <p className='text-sm'>{userName} do not have any books registered in his favorites.</p>
                            }

                            <Link href={`/book`}><a className='text-xs text-gray-500 cursor-pointer underline'>More...</a></Link>

                        </div>

                        <div className='lg:flex hidden flex-1 flex-col rounded-lg border-[1px] border-gray-300 p-4 gap-4'>

                            <p className='font-semibold'>{userName}&apos;s Library</p>
                        
                            {librairie!==false&&librairie.length!==0?
                                librairie.slice(0,3).map((book)=>{return(
                                    <LilBooks key={book.sku} src={book.imgsrc} title={book.title} author={book.author} sku={book.sku}/>
                                )})
                            :
                            <p className='text-sm'>{userName} do not have any books registered in his library.</p>
                            }

                            <Link href={`/book`}><a className='text-xs text-gray-500 cursor-pointer underline'>More...</a></Link>

                        </div>

                    </div>

                    <div className='flex flex-[3] lg:order-2 order-1 flex-col rounded-lg border-[1px] border-gray-300 relative'>

                        <div className='h-[25vh] flex w-full rounded-lg bg-gradient-to-b from-indigo-500 to-[rgb(99,102,241,0.1)]'></div>

                        <div className='p-4 flex flex-col flex w-full rounded-lg mt-[calc(5rem)] justify-center items-center'>

                            <p className='text-xl font-semibold'>{userName}</p>

                            <p className='text-sm color text-gray-400'>{idUser}</p>

                        </div>

                        <div className='p-4 flex flex-row lg:hidden flex w-full items-center justify-center gap-4'>

                            <p className='flex-1 text-center text-sm'><span className='font-semibold text-base'>{abonnes.length}</span><br/>abonn??s</p>

                            <p className='flex-1 text-center text-sm'><span className='font-semibold text-base'>{avis.length}</span><br/>publications</p>

                            <p className='flex-1 text-center text-sm'><span className='font-semibold text-base'>{librairie.length}</span><br/>books</p>

                        </div>

                        <div className='p-4 flex flex-row w-full items-center justify-center gap-4'>

                            <button className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100">{loader1?<Loader/>:"Add to Friends"}</button>

                            {/* <button className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100">{loader2?<Loader/>:"Send Message"}</button> */}

                            <button className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100">{loader3?<Loader/>:"Compare Books"}</button>

                            {/* <button className="block w-full border-[1px] border-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition-all ease-in-out duration-300 hover:bg-gray-100">{loader4?<Loader/>:"Block / Report"}</button> */}

                        </div>

                        <div className='p-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-4'>
                            
                            <div>
                                
                                {avis!==false?
                                    <div className='lg:flex hidden flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>Notes : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'>{avis.length} ratings {avis.length>0?"(4,04 average)":''}<br/>{avis.length>0?"11 reviews":''}</p></div>

                                    </div>
                                :
                                ''
                                }
                                
                                {language!==false?
                                    <div className='flex flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>Language : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'>{hangLanguage(language)}</p></div>

                                    </div>
                                :
                                ''
                                }
                                
                                {age!==false?
                                    <div className='flex flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>Details : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'>{age} years old</p></div>

                                    </div>
                                :
                                ''
                                }
                                
                                {creation!==false?
                                    <div className='flex flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>Activity : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'>Joined in {hangMonthFromIndex(createdat.getMonth())} {createdat.getFullYear()}</p></div>

                                    </div>
                                :
                                ''
                                }

                            </div>

                            <div>

                                {/* <div className='flex flex-row mb-2 gap-1'>

                                    <div className='flex flex-[2]'><p className='font-semibold text-sm'>Favorite Books : </p></div>
                                    
                                    <div className='flex flex-[4]'><p className='text-sm'>Romance, Heroic Fantaisy</p></div>

                                </div> */}

                                {biography!==false?
                                    <div className='flex flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>About me : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'>{biography}</p></div>

                                    </div>
                                    :
                                    ''
                                }
                                
                                {website!==false?
                                    <div className='flex flex-row mb-2 gap-1'>

                                        <div className='flex flex-[2]'><p className='font-semibold text-sm'>Website : </p></div>
                                        
                                        <div className='flex flex-[4]'><p className='text-sm'><a href={website} className='underline'>{website.substring(12,website.lastIndexOf('.'))}</a></p></div>

                                    </div>
                                :
                                ''
                                }

                            </div>

                        </div>

                        <img src={`/img/book-banner-${Math.floor(Math.random()*6)}.png`} alt={`Photo de profil de ${idUser}`} className={`self-center top-[calc(25vh-5rem)] flex rounded-full h-40 w-40 absolute border-2 border-white`}/>

                    </div>

                    <div className='flex flex-col flex-1 order-3 lg:flex hidden gap-4'>

                        <div className='flex flex-1 flex-col rounded-lg border-[1px] border-gray-300 p-4 gap-4'>

                            <p className='font-semibold'>{userName}&apos;s Friends</p>

                            {abonnes!==false&&abonnes.length!==0?
                                abonnes.map((abonne)=>{return(
                                    <UserProfile key={abonne.name} name={abonne.name} abonnes={abonne.User_A.length} books={abonne.lib.length} />
                                )})
                            :
                            <p className='text-sm'>{userName} do not have any followers.</p>
                            }

                            <Link href={`/user`}><a className='text-xs text-gray-500 cursor-pointer underline'>More...</a></Link>

                        </div>

                        <div className='flex flex-1 flex-col rounded-lg border-[1px] border-gray-300 p-4 gap-4'>

                            <p className='font-semibold'>People {userName} is following</p>

                            {abonnements!==false&&abonnements.length!==0?
                                abonnements.map((abonnement)=>{return(
                                    <UserProfile key={abonnement.name} name={abonnement.name} abonnes={abonnement.User_A.length} books={abonnement.lib.length} />
                                )})
                            :
                            <p className='text-sm'>{userName} do not follow anyone.</p>
                            }

                            <Link href={`/user`}><a className='text-xs text-gray-500 cursor-pointer underline'>More...</a></Link>

                        </div>

                    </div>

                </div>

                <Footer elements={FootLinks()}/>
            </>
        :
        <>
            <Head>
                <title>Error : {idUser} does not exist - Alexandria</title>
                <meta name="description" content="Written with Heart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar elements={NavLinks()}/>

            <p className='p-4'>L&apos;utilisateur {idUser} n&apos;existe pas ou plus. Veuillez v??rifier l&apos;orthographe, puis r??essayer.</p>

            <Footer elements={FootLinks()}/>
        </>
        }
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
            return await getUserInfos(id.substring(1,id.toString().length))
            .then((userInfos) => {
                return {
                    props: {
                        biography: userInfos?.bio||false,
                        website: userInfos?.website||false,
                        language: userInfos?.language||false,
                        age: userInfos?.age||false,
                        creation: userInfos?.created_at||false,
                        exists: userInfos?.name||false,
                        avis: userInfos?.posts||false,
                        idUser: id,
                        abonnements: userInfos?.User_B||false,
                        abonnes: userInfos?.User_A||false,
                        librairie: userInfos?.lib||false,
                        challenge: userInfos?.challenge||false,
                    }
                }
            })
            .catch((error) => {
                console.log(error)
                return {
                    props: {
                        idUser: id,
                        // erreur: error,
                    }
                }
            })
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