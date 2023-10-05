import { useEffect, useState } from 'react'
import axios from '../api/axios'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect( () => {
        const controller = new AbortController();
        let isMount = true;
        const fetchEmployees = async (urlToFetch) => {
            try {
                const resp = await axios.get(urlToFetch, {signal:controller.signal});
                // if (!resp.ok) throw Error("Data fetch Error");
                const responseData = await resp.data;

                isMount && setData(responseData)
                isMount && setLoading(false)
                
            } catch (error) {
                isMount && setError(true)
                console.error(error.message)
            } finally {
                isMount && setLoading(false)
            }
        }
            fetchEmployees(url)
                
            return () => {
                            isMount = false
                            controller.abort();
                        }
    }, [url])
    
    return {data, isLoading, isError}
}

export default useFetch;