import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund.jsx'
import { MovesList } from '../cmps/MovesList.jsx'
import '../assets/scss/global.scss'
import { Link } from 'react-router-dom'

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  loadContact = async () => {
    try {
      const contact = await contactService.getContactById(this.props.match.params.id)
      this.setState({ contact })
    } catch (error) {
      console.log('error:', error)
    }
  }
  // onBack = () => {
  //   this.props.history.push('/contacts')
  // }

  render() {
    const { contact } = this.state
    // const user = userService.getUser()
    if (!contact) return <div>Loading...</div>
    return (
      <section className="contact-details-page flex">
        <section className="contact-details">
          <section className="actions-btns">
            {/* <button title="back to contacts" onClick={this.onBack}>
              Back
            </button> */}
            <Link to={'/contacts'}>Back</Link>
            <div className="flex">
              <Link title="edit contact" to={`/contact/edit/${contact._id}`}>
                ✏️
              </Link>
            </div>
          </section>
          <img src={contact.img} alt="img" />
          <h3>Name: {contact.name}</h3>
          <h4>Phone: {contact.phone}</h4>
          <h4>Email: {contact.email}</h4>
          {/* <button onClick={this.onBack}>Back</button> */}
        </section>

        <section className="transfer-fund">
          <TransferFund contact={contact} />
          <MovesList contact={contact} />
        </section>
      </section>
    )
  }
}
