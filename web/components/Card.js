import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function Card({src, title, author, serie, tome, }) {
    return(
        <Link href={`/`}>
            <a className={`flex flex-col text-black rounded-lg border-[1px] border-gray-300 ${styles.card}`}>
                <img src={src} alt={`Une couverture de livre`} className={`rounded-lg h-full w-full`}/>
                <div className={`flex flex-col p-4`}>

                    <p className={`text-sm font-semibold`}>{title}{serie===true?<span className={`text-xs font-normal`}> - Tome {tome.toString()}</span>:""}</p>

                    <p className={`text-xs italic`}>{author}</p>

                </div>
            </a>
        </Link>
    )
}