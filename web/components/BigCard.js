import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Card.module.css"

export default function BigCard({ src, title, author, serie, tome, note, sku }) {

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let rndmInt = randomIntFromInterval(1,5)

    function switchColor() {
        switch (rndmInt) {
            case 1:
                return('bg-teal-300')
            case 2:
                return('bg-purple-300')
            case 3:
                return('bg-indigo-300')
            case 4:
                return('bg-red-300')
            case 5:
                return('bg-blue-300')
        }
    }

    return(
        <Link href={`/book/${sku}`}>
            <a className={`relative flex items-end rounded-lg text-gray-600 hover:text-black rounded-lg min-h-[20vh] min-w-[5vw] ${styles.bigCardHover}`}>

                <img src={src} alt={`Une couverture de livre`} className={`flex absolute bottom-4 left-4 self-start justify-self-start h-full w-auto ${styles.image} rounded-lg`}/>

                <div className={`static grid grid-cols-2 ${switchColor()} w-full rounded-lg h-2/3 ${styles.blocTexte}`}>

                    <div></div>

                    <div className="flex flex-col p-4 justify-center">

                        <p className={`text-sm font-semibold`}>{title}{serie===true?<span className={`text-xs font-normal`}> - Tome {tome.toString()}</span>:""}</p>

                        <p className={`text-xs italic`}>{author}</p>
                        
                        <div className={`flex items-center mt-2.5`}>
                            <svg className={`w-5 h-5 ${note>=1?"text-yellow-300":"text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className={`w-5 h-5 ${note>=2?"text-yellow-300":"text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className={`w-5 h-5 ${note>=3?"text-yellow-300":"text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className={`w-5 h-5 ${note>=4?"text-yellow-300":"text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg className={`w-5 h-5 ${note>=5?"text-yellow-300":"text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className={`bg-white text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-3`}>{note}</span>
                        </div>
                        
                    </div>

                </div>

            </a>
        </Link>
    )
}