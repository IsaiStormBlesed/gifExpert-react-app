import { useState } from 'react'

export function AddCategory({ categories, setCategories }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setCategories([inputValue, ...categories])

    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}
