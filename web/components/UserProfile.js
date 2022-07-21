import Link from "next/link"

export default function UserProfile({name,abonnes,books}) {
    return(
        <Link href={`/user/@${name}`}>

            <div className="flex flex-row w-full gap-4 items-center justify-center cursor-pointer">

                <img src={`/img/book-banner-${Math.floor(Math.random()*6)}.png`} alt={`Photo de profil`} className={`flex rounded-full h-10 w-10`}/>

                <div className="w-full flex flex-col">

                    <p>@{name}</p>

                    <div className="flex flex-row gap-2">

                        <p className="text-xs">{abonnes} Friends</p>

                        <p className="text-xs">{books} Books</p>

                    </div>

                </div>

            </div>

        </Link>
    )
}