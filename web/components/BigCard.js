import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function BigCard({src, title, author, serie, tome, note, sku, }) {
    return(
        <Link href={`/book/${sku}`}>
            <a className={`text-black bg-white border border-gray-300 rounded-lg h-[30vh] min-w-[65vw]`}>

                <div>

                </div>

            </a>
        </Link>
    )
}