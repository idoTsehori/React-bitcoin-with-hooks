import React from 'react'
import { userService } from '../services/user.service'

export function TransferFund({ contact }) {
  const onTransferCoins = (ev) => {
    const user = userService.getUser()
    ev.preventDefault()
    const amountInput = ev.target.elements.amount
    const amount = +amountInput.value
    if (amount <= 0) return
    if (amount > user.coins) return

    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    }
    userService.UserPay(amount)
    userService.addMove(move)
  }

  return (
    <form onSubmit={onTransferCoins} className="transfer">
      <h3>Transfer coins to {contact.name}</h3>
      <section style={{ gap: '0.5em' }} className="flex">
        <label htmlFor="amount">Amount:</label>
        <input min={0} type="number" name="amount" id="amount" />
        <button>Transfer</button>
      </section>
    </form>
  )
}
