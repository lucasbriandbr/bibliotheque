import Link from "next/link";

export default function LilBooks({ src, title, author, sku }) {
    return(
        <Link href={`/book/${sku}`}>

            <div className="flex flex-row w-full gap-4 items-center justify-center cursor-pointer">
                
                <img src={src} alt={`Une couverture de livre`} className={`h-10 w-auto`}/>

                <div className="w-full flex flex-col">

                    <p>{title}</p>

                    <div className="flex flex-row gap-2">

                        <p className="text-xs">{author}</p>

                    </div>

                </div>

            </div>

        </Link>
    )
}