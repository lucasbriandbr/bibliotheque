import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Book() {

    const router = useRouter()
    
    useEffect(() => {
        router.push('/explore')
    })

}