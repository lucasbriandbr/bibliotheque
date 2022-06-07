import Link from "next/link"
import Head from "next/head"
import styles from "../../styles/NavBar.module.css"

export default function NavBar() {
    return(
        <>
            <nav className={`bg-white px-4 sm:px-6 py-4 dark:bg-[#faebd7] border-b-[1px] border-black`}>
                <div className={`container flex flex-wrap justify-between items-center mx-auto`}>
                <Link href={"/"}>
                    <a className={`flex items-center ${styles.title}`}>
                        {/* <img src="/docs/images/logo.svg" className={`mr-3 h-6 sm:h-9`} alt="Flowbite Logo" /> */}
                        <span className={`self-center text-xl font-semibold whitespace-nowrap dark:text-black`}>Alexandria</span>
                    </a>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="mobile-menu" aria-expanded="false">
                    <span className={`sr-only`}>Open main menu</span>
                    <svg className={`w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className={`hidden w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div className={`hidden w-full md:block md:w-auto`} id="mobile-menu">
                    <ul className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ${styles.links}`}>
                        <li>
                            <Link href={"/"}>
                                <a className={`block py-2 pr-4 pl-3 text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <a className={`block py-2 pr-4 pl-3 text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Shop</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <a className={`block py-2 pr-4 pl-3 text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <a className={`block py-2 pr-4 pl-3 text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>About us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"}>
                                <a className={`block py-2 pr-4 pl-3 text-black hover:bg-gray-50 md:hover:bg-transparent md:hover:text-gray-800 md:p-0 dark:text-black md:dark:hover:text-gray-800 dark:hover:text-gray-800 md:dark:hover:bg-transparent`}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}