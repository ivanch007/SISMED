import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [estado, setEstado] = useState({
        data: null,
        isLoading: true,
        errors: null

    })

    const {data, isLoading, errors} = estado

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setEstado({
                data,
                isLoading: false,
                errors: null
        })
        } catch (error) {
            setEstado({
                data: null,
                isLoading: false,
                errors: error
        })

        }
    }
    
    useEffect(()=>{
        if(!url) return
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }
}

