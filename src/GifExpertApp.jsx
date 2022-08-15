import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch', 'Demon Slayer'])

  const handleClick = () => {
    setCategories([...categories, 'Tokyo Ghoul'])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategories={setCategories} categories={categories} />
      <button onClick={handleClick}>Add Category</button>
      {categories.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </>
  )
}
