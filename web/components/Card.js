import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function Card({src}) {
    return(
        <div className={`flex flex-col text-gray-300 h-full rounded-lg border-[1px] border-gray-300 ${styles.card} p-4`}>
            <Link href={`/`}>
                <a className="relative">
                    <img src={src} alt={`Une couverture de livre`}/>
                </a>
            </Link>

            <div className={`flex p-4 items-center justify-center`}><p>Coucou petit caca</p></div>
        </div>
    )
}