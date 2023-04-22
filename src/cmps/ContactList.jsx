import React from 'react'
import { ContactPreview } from '../cmps/ContactPreview.jsx'
export function ContactList({ contacts, onRemoveContact }) {
  return (
    <section className="contact-list flex column">
      {contacts.map((contact) => (
        <ContactPreview onRemoveContact={onRemoveContact} key={contact._id} contact={contact} />
      ))}
    </section>
  )
}
