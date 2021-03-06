import Link from "next/link"
import styles from "../styles/NavBar.module.css"
import { useWindowWidth } from "../hooks/useWindowSize"
import { useEffect, useState } from "react"

export default function NavBar({elements}) {

    let width = useWindowWidth()

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (width>=770){
            setMenuOpen(false)
        }
    },[width]);

    return(
        // <>
        //     <nav className={`overflow-hidden${menuOpen?"":" h-[51px]"} ${width>=770?" h-[48px]":""} fixed top-0 w-full z-10`}>
        //         <div className={`relative bg-[#faebd7]`}>
        //             <div className={`flex flex-wrap justify-between items-center mx-auto`}>

        //                 {/* Titre du site */}

        //                 <Link href={"/"}>
        //                     <a className={`flex ml-6 items-center ${styles.title}`}>
        //                         <span className={`self-center text-xl font-semibold whitespace-nowrap`}>Elie's Books and Coffee</span>
        //                     </a>
        //                 </Link>

        //                 {/* Affiche la liste des pages, sinon affiche l'icone ouvrant */}

        //                 {width>=770?
        //                 <div className={`block w-auto`}>
        //                     <ul className={`flex flex-row text-sm ${styles.links}`}>
        //                         {elements.map((element) => {return(
        //                             <li key={element.title}>
        //                                 <Link href={element.link}>
        //                                     <a className={`flex text-black uppercase transition-colors duration-200 ease-in-out hover:bg-[#F9F3EE] text-xs`}><img className="h-5 w-5" src={element.path}/></a>
        //                                 </Link>
        //                             </li>
        //                         )})}
        //                     </ul>
        //                 </div>

        //                 :

        //                 // Affiche l'icone de menu

        //                 <div className={`${styles.menuicon}`} onClick={() => setMenuOpen(!menuOpen)}>
        //                     <input className={`${styles.menuicon__cheeckbox}`} type="checkbox"/>
        //                     <div>
        //                         <span></span>
        //                         <span></span>
        //                     </div>
        //                 </div>
        //                 }
        //             </div>
        //         </div>

        //         {/* Affiche les liens si le menu est ouvert */}

        //         <div className={`relative transition-all duration-1000 ease-in-out border-black bg-[#faebd7] ${menuOpen?"":"hidden"}`}>
        //             <ul className={`flex flex-col md:flex-row md:text-sm md:font-medium`}>
        //                 {elements.map((element) => {return(
        //                     <li key={element.title}>
        //                         <Link href={element.link}>
        //                             <a className={`flex text-black uppercase p-[15px] border-b-[1px] border-black text-xs`}>{element.title}</a>
        //                         </Link>
        //                     </li>
        //                 )})}
        //             </ul>
        //         </div>
        //     </nav>

        //     {/* Espace afin de bien g??rer la navbar */}

        //     <div className={`${width>=770?" h-[47px]":"h-[50px]"}`}></div>
        // </>
        <>
            <nav className={`fixed w-full z-10`}>

                <div className={`absolute flex flex-col ${menuOpen?"translate-y-0":"-translate-y-full"} rounded-b-lg transition-all ease-in-out duration-500 bg-gray-300 w-full`}>
                    <ul className={`flex flex-col`}>
                        {elements.map((element) => {return(
                                <Link href={element.link}>
                                    <a className={`p-4 text-xs`} key={element.title}>{element.title}</a>
                                </Link>
                        )})}
                    </ul>
                </div>

                <div className={`flex flex-row ${menuOpen?"":"rounded-b-lg"} transition-all ease-in-out duration-500 bg-gray-300`}>
                    <div className={`flex flex-1 flex-row pl-4 pr-4 items-center`}>
                        <p>Elie's Books and Coffee</p>
                    </div>

                    <div className={`${styles.menuicon}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <input className={`${styles.menuicon__cheeckbox}`} type="checkbox"/>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

            </nav>
            <div className={`h-[40px] w-full`}></div>
        </>
    )
}