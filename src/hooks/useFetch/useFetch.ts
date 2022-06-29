import { useState, useEffect, useCallback } from 'react'

type UseFetchDataType<D> = {
  data?: D[] | null
  loading: boolean
  error?: any
}

/**
 * @name useFetch
 * @description This hook is used to fetch data from an url
 * @param {string} url
 * @returns {UseFetchDataType} data, loading, error
 * */

const useFetch = (url: string): UseFetchDataType<null> => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const parseResponse = await response.json()
      setData(parseResponse)
    } catch (errors: any) {
      setError(errors)
    }
    setLoading(false)
  }, [url])

  useEffect(() => {
    fetchData()
  }, [url, fetchData])

  return { data, loading, error }
}

export default useFetch
