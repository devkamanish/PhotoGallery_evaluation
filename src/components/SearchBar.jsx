import React from 'react'
import { debouce } from '../utils/debouce'


const SearchBar = ({onSearch}) => {
    const handleChange = debouce((e)=>onSearch(e.target.value), 500)

  return (
   <input type="text"
   placeholder='Search photos..' 
   onChange={handleChange}
   
   
   />
  )
}

export default SearchBar