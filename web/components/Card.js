import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function Card({src}) {
    return(
        <div className={`flex flex-row text-black h-full w-full rounded-lg border-[1px] border-gray-300 ${styles.card}`}>
            <Link href={`/`}>
                <a>
                    <img src={src} alt={`Une couverture de livre`} className={`h-full w-auto rounded-lg`}/>
                </a>
            </Link>
            {/* <div><p>Petit caca oupps encore aaaaah</p></div> */}
        </div>
    )
}