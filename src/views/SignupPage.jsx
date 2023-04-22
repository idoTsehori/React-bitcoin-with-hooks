// import { logDOM } from '@testing-library/react'
// import { signUp } from '../store/actions/user.actions'
import { Component } from 'react'
import '../assets/scss/global.scss'
import { userService } from '../services/user.service'
import { connect } from 'react-redux'

class _SignupPage extends Component {
  state = {
    user: userService.getEmptyUser(),
  }

  handleChange = ({ target }) => {
    // const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
    }
    this.setState(({ user }) => ({ user: { ...user, name: value } }))
    console.log(this.state.user)
  }

  createNewUser = (ev) => {
    ev.preventDefault()
    try {
      // this.props.signUp(this.state.user)
      userService.signUp(this.state.user.name)
      this.props.history.push('/')
    } catch (error) {
      console.log('error:', error)
    }
    console.log(this.state.user)
  }

  render() {
    return (
      <form onSubmit={this.createNewUser} className="signup-modal">
        <h1>🪙</h1>
        <p>Please enter your name:</p>
        <input
          onChange={this.handleChange}
          // name={name}
          // id={name}
          // value={name}
          type="text"
          placeholder="your name here..."
        />
        <button>Sign Up</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  user: (<state className="userReducer"></state>).contacts,
})

const mapDispatchToProps = {
  // signUp,
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)
