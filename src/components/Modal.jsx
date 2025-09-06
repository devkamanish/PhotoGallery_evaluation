import React from 'react'

const Modal = ({photo, onClose}) => {
    if(!photo) return null;
  return (
    <div>

        <div>
            <img src={photo.url} alt={photo.title} />
            <h2>{photo.title}</h2>
            <p>{photo.description}</p>
            <button onClick={onClose}> Close button</button>
            
        </div>
    </div>
  )
}

export default Modal