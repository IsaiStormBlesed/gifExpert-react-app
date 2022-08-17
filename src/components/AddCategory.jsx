import { useState } from 'react'

export function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    const str = e.target.value
    setInputValue(str.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimedInputValue = inputValue.trim().toLowerCase()
    if (trimedInputValue.length <= 1) return

    onAddCategory(trimedInputValue)
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
