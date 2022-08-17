import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch', 'Demon Slayer'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  )
}
