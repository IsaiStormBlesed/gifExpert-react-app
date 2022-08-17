export const getGifs = async (category) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_API_KEY}&q=${category}&limit=5`
  const response = await fetch(API_URL)
  const { data } = await response.json()

  const gifsArray = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }))

  return gifsArray
}
