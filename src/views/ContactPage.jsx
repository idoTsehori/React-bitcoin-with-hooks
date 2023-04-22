import '../assets/scss/global.scss'
import { Component } from 'react'
import { ContactList } from '../cmps/ContactList.jsx'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'

class _ContactPage extends Component {
  componentDidMount() {
    this.props.loadContacts()
  }

  onRemoveContact = async (contactId) => {
    try {
      this.props.removeContact(contactId)
    } catch (error) {
      console.log('error:', error)
    }
  }

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="contact-page-container full">
        <section className="contact-page-btns">
          <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
          <Link to={`/contact/edit`}>New Contact</Link>
        </section>
        <ContactList
          contacts={contacts}
          onRemoveContact={this.onRemoveContact}
          onSelectContact={this.onSelectContact}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
  filterBy: state.contactReducer.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
