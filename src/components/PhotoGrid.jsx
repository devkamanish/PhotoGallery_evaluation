
import React, { useEffect } from 'react'
import { useState,  } from 'react'
import { db } from '../services/firebase'
import {ref, query , orderByChild,limitToFirst, startAfter, get} from "firebase/database"
import PhotoCard from './PhotoCard'

const PhotoGrid = ({sortOrder, searchTerm, onPhotoClick}) => {
    const [photos, setPhotos] = useState([])
    const [lastKey, setLastKey] = useState(null)
    const [loading , setLoading]=  useState(false)

    const loadPhotos = async ()=>{
        setLoading(true);
        let q = query(ref(db, "photos"), orderByChild("title"),limitToFirst(6))
        if(lastKey) q = query(ref(db,"photos"), orderByChild("title"), startAfter(lastKey), limitToFirst(6))

            const snapshot = await get(q); 
            if(snapshot.exists()){
                const newPhotos = Object.values(snapshot.val());
                setPhotos((prev)=>[...prev,...newPhotos])
                setLastKey(newPhotos[newPhotos.length-1].title)

            }
            setLoading(false)
    }

    useEffect(()=>{
        loadPhotos();
        const handleScroll = ()=>{
            if(window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.offsetHeight){
                loadPhotos()

            }
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)

    }, [lastKey])

    const filteredPhotos = photos
    .filter((p)=> p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a,b)=> (sortOrder ==="asc" ? a.title.localCompare(b.title): b.title.localCompare(a.title)))


  return (
   <div>
    {filteredPhotos.map((photo, idx)=>(
        <PhotoCard key={idx} photo={photo} onClick={onPhotoClick}/>

    ))}
    {loading && <p>Loading ...</p>}
   </div>
  )
}

export default PhotoGrid





