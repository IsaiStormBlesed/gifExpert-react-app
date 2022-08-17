import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export function useFetchGifs(category) {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category).then((images) => {
      setGifs(images)
      setIsLoading(false)
    })
  }, [])

  return {
    gifs,
    isLoading,
  }
}
