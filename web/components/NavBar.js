import Link from "next/link"
import styles from "../styles/NavBar.module.css"
import { useWindowWidth } from "../pages/hooks/useWindowSize"
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
            <nav className={`overflow-hidden${menuOpen?"":" h-[51px]"} ${width>=770?" h-[47px]":""} fixed w-full`}>
                <div className={`z-10 relative bg-[#faebd7] border-b-[1px] border-black`}>
                    <div className={`flex flex-wrap justify-between items-center mx-auto`}>
                        <Link href={"/"}>
                            <a className={`flex ml-6 items-center ${styles.title}`}>
                                <span className={`self-center text-xl font-semibold whitespace-nowrap`}>Alexandria</span>
                            </a>
                        </Link>
                        {width>=770?
                        <div className={`block w-auto`}>
                            <ul className={`flex flex-row text-sm ${styles.links}`}>
                                {elements.map((element) => {return(
                                    <li key={element.title}>
                                        <Link href={element.link}>
                                            <a className={`flex text-black uppercase transition-colors duration-200 ease-in-out hover:bg-white text-xs`}>{element.title}</a>
                                        </Link>
                                    </li>
                                )})}
                            </ul>
                        </div>
                        :
                        <div className={`${styles.menuicon}`} onClick={() => setMenuOpen(!menuOpen)}>
                            <input className={`${styles.menuicon__cheeckbox}`} type="checkbox"/>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className={`z-0 relative transition-all duration-1000 ease-in-out border-black bg-[#faebd7] ${menuOpen?"":"hidden"}`}>
                    <ul className={`flex flex-col md:flex-row md:text-sm md:font-medium`}>
                        {elements.map((element) => {return(
                            <li key={element.title}>
                                <Link href={element.link}>
                                    <a className={`flex text-black uppercase p-[15px] border-b-[1px] border-black text-xs`}>{element.title}</a>
                                </Link>
                            </li>
                        )})}
                    </ul>
                </div>
            </nav>
    )
}