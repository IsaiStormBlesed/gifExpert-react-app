import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export default function GifExpertApp() {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </>
  )
}
