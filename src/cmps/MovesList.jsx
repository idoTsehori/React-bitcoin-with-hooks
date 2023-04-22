import React, { useMemo } from 'react'
import { userService } from '../services/user.service'
import '../assets/scss/global.scss'

export function MovesList({ contact }) {
  const user = userService.getUser()
  const moves = user.moves.filter((move) => move.toId === contact._id)

  const formatDate = useMemo(() => {
    return function formatDate(timeStamp) {
      const dateObj = new Date(timeStamp)
      return dateObj.toLocaleString()
    }
  }, [])

  if (!moves.length) return

  return (
    <section className="move-list">
      <h2>Your Moves:</h2>
      {moves.map((move) => (
        <article className="contact-move">
          <h3>At {formatDate(move.at)}</h3>
          <h3>Mount: {move.amount}</h3>
        </article>
      ))}
    </section>
  )
}
