import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)


    const fetchEmployees = async (urlToFetch) => {
        try {

            const resp = await fetch(urlToFetch);
            if (!resp.ok) throw Error("Data fetch Error");
            const responseData = await resp.json();

            setData(responseData)
            setLoading(false)
            
        } catch (error) {
            setError(true)
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchEmployees(url)
    }, [url])
    
    return {data, isLoading, isError}
}

export default useFetch;