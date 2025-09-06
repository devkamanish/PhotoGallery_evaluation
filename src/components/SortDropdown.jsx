
import { savePreference } from "../utils/localStorage";

import React from 'react'

const SortDropdown = ({sortOrder, setSortOrder}) => {
    const handleChange = (e)=>{
        setSortOrder(e.target.value)
        savePreference("sortOrder", e.target.value)

    }
  return (

  <select value = {sortOrder} onChange={handleChange}>
    <option value="asc">Title Ascending</option>
    <option value="desc">Title Descending</option>
  </select>
  )
}

export default SortDropdown