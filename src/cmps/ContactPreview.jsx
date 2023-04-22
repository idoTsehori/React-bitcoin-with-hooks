import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ColorThief from 'colorthief'

export function ContactPreview({ contact, onRemoveContact }) {
  const [dominantColor, setDominantColor] = useState(null)
  const history = useHistory()

  // useEffect(() => {
  //   const colorThief = new ColorThief()

  //   const image = new Image()
  //   image.crossOrigin = 'anonymous' // Set crossOrigin attribute
  //   image.onload = () => {
  //     const color = colorThief.getColor(image)
  //     setDominantColor(`rgb(${color.join(', ')})`)
  //   }
  //   image.src = contact.img
  // }, [contact.img])

  function deleteContact(ev) {
    ev.stopPropagation()
    onRemoveContact(contact._id)
  }

  return (
    <article
      onClick={() => history.push(`/contact/${contact._id}`)}
      className="contact-preview flex"
      // style={{ backgroundColor: dominantColor }}
    >
      <button onClick={deleteContact} title="delete contact" className="delete-contact">
        X
      </button>
      <img src={contact.img} alt="contact img" />
      <h4>{contact.name}</h4>
    </article>
  )
}
