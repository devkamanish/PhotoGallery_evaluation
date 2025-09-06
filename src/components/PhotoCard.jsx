
import React from 'react'

const PhotoCard = ({photo, onClick}) => {
  return (
    <div onClick={()=>onClick(photo)}>
  <img src={photo.url} alt={photo.title} />
  <p>{photo.title}</p>
  
    </div>
  )
}

export default PhotoCard