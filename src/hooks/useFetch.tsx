import { useEffect, useState } from "react"
import { ChartI, CoinData, coinPriceI, detailsI } from "../iterfaces/hookI"

const useFetch = ({url}) => {
    const [response,setResponse] = useState<CoinData & coinPriceI[] & detailsI & ChartI>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const fetchData = () => {
        setLoading(true)
        fetch(url, {
            headers:{
                'accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setResponse(data)
        })
        .catch(err => setError(err))
        .finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
  return {loading,response,error}
}

export default useFetch