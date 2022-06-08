import Link from "next/link"
import styles from "../styles/Footer.module.css"
import { useWindowWidth } from "../pages/hooks/useWindowSize"
import { useEffect, useState } from "react"

export default function NavBar({elements}) {

    let width = useWindowWidth()

    const current = new Date()

    return(
            <footer className={`bg-[#faebd7]`}>

                <hr className={`border-black`} />

                <div className={`p-[15px]`}>
                    <div className={`grid gap-[15px] grid-cols-[repeat(${elements.length},_minmax(0,_1fr))]`}>
                        {elements.map((element) => {return(
                            
                            <div className={`text-xs`} key={element.title}>
                                <h2 className={`mb-6 uppercase`}>{element.title}</h2>
                                <ul>
                                    {element.pieces.map((link) => {return(
                                        
                                        <li className={`mb-4`} key={link.title}>
                                            <Link href={link.link}>
                                                <a>{link.title}</a>
                                            </Link>
                                        </li>

                                    )})}
                                </ul>
                            </div>

                        )})}
                    </div>
                </div>

                <hr className={`border-black`} />

                <div className={`flex flex-row items-center align-center justify-between p-[15px] text-xs`}>
                    <p>Written with heart</p>
                    <Link href={"/"}>
                        <a>© {current.getFullYear()} Alexandria. All Rights Reserved.</a>
                    </Link>
                </div>

            </footer>
    )
}