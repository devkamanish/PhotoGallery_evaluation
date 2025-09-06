

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { getPreference } from '../utils/localStorage'
import SearchBar from '../components/SearchBar'
import SortDropdown from '../components/SortDropdown'
import PhotoGrid from '../components/PhotoGrid'
import Modal from '../components/Modal'

const Home = ({user}) => {
    const [ searchTerm , setSearchTerm]  = useState("")
    const [sortOrder , setSortOrder] = useState(getPreference("sortOrder" , "asc") )
    const [selectedPhoto, setSelectedPhoto] = useState(null)


  return (
    <>
    <Navbar user={user} />
    <div>
        <SearchBar onSearch={setSearchTerm}/>
        <SortDropdown sortOrder={sortOrder}/>

    </div>

    <PhotoGrid sortOrder = {sortOrder} />
    <Modal photo={selectedPhoto} onClose={()=> setSelectedPhoto(null)}/>
    </>
  )
}


export default Home


