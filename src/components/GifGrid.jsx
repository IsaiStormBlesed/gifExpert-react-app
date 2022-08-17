import { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export function GifGrid({ category }) {
  getGifs(category)

  useEffect(() => {}, [])

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
