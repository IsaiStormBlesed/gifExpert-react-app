import { useFetchGifs } from '../hooks/useFetchGifs'
import { MoonLoader } from 'react-spinners'
import { GifItem } from './GifItem'

export function GifGrid({ category }) {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <MoonLoader />}
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
