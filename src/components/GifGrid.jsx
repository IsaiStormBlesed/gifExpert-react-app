import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export function GifGrid({ category }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then((images) => setGifs(images))
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
