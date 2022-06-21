import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function BigCard({src, title, author, serie, tome, note, sku, }) {
    return(
        <Link href={`/book/${sku}`}>
            <a className={`relative flex items-end text-black bg-white min-h-[30vh] min-w-[5vw]`}>

                <img src={src} alt={`Une couverture de livre`} className={`flex absolute bottom-4 left-4 self-start justify-self-start h-2/3 w-auto border border-black rounded-lg`}/>

                <div className="static flex bg-blue-300 w-full rounded-lg h-2/3">

                </div>

            </a>
        </Link>
    )
}