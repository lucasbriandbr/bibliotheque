import Link from "next/link"
import styles from "../../styles/NavBar.module.css"
import { useWindowWidth } from "../hooks/useWindowSize"
import { useEffect, useState } from "react"

export default function NavBar() {

    const width = useWindowWidth()

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <nav className={`bg-white dark:bg-[#faebd7] border-b-[1px] border-black`}>
                <div className={`flex flex-wrap justify-between items-center mx-auto`}>
                    <Link href={"/"}>
                        <a className={`flex ml-6 items-center ${styles.title}`}>
                            {/* <img src="/docs/images/logo.svg" className={`mr-3 h-6 sm:h-9`} alt="Flowbite Logo" /> */}
                            <span className={`self-center text-xl font-semibold whitespace-nowrap dark:text-black`}>Alexandria</span>
                        </a>
                    </Link>
                    {width>=770?
                    <div className={`block w-auto`}>
                        <ul className={`flex flex-col md:flex-row md:text-sm md:font-medium ${styles.links}`}>
                            <li>
                                <Link href={"/"}>
                                    <a className={`flex text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <a className={`flex text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <a className={`flex text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <a className={`flex text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>About us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <a className={`flex text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    :
                    // <button type="button" className={`inline-flex items-center p-[15px] border-l-[1px] border-black ml-3 text-sm text-black hover:bg-white focus:outline-none dark:text-black`} aria-controls="mobile-menu" aria-expanded="false" onClick={() => setMenuOpen(!menuOpen)}>
                    //     <svg className={`${menuOpen?"hidden":""} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                    //     <svg className={`${!menuOpen?"hidden":""} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                    // </button>
                    <div className={`${styles.menuicon}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <input className={`${styles.menuicon__cheeckbox}`} type="checkbox" />
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    }
                </div>
            </nav>
        </>
    )
}