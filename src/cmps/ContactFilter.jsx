import { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    filterBy: null,
  }

  componentDidMount() {
    this.setState({ filterBy: { ...this.props.filterBy } })
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }
    this.setState(
      ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
      () => this.props.onChangeFilter(this.state.filterBy)
    )
  }

  render() {
    if (!this.state.filterBy) return <div>Loading...</div>
    const { name } = this.state.filterBy
    return (
      <form className="contact-filter">
        <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleChange}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Search"
        />
      </form>
    )
  }
}
