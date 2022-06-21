import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function BigCard({src, title, author, serie, tome, note, sku, }) {
    return(
        <Link href={`/book/${sku}`}>
            <a className={`relative flex items-end text-black bg-white min-h-[50vh] min-w-[45vw]`}>

                <div className="static bg-blue-300 w-full rounded-lg h-2/3">

                </div>

                <img src={src} alt={`Une couverture de livre`} className={`absolute bottom-8 left-8 self-start justify-self-start h-auto w-2/5 border border-black rounded-lg`}/>

            </a>
        </Link>
    )
}