import '../assets/scss/global.scss'
import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import phoneVideo from '../assets/imgs/phone.mp4'
import buyImg from '../assets/imgs/buy.webp'
import one from '../assets/imgs/one.webp'
import two from '../assets/imgs/two.webp'
import three from '../assets/imgs/three.webp'
import educationImg from '../assets/imgs/education.webp'
import simplicityImg from '../assets/imgs/simplicity.webp'
import serviceImg from '../assets/imgs/service.webp'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class _HomePage extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    const user = userService.getUser()
    if (!user) return
    user['btc'] = await bitcoinService.getRate(user.coins)
    this.setState({ user: { ...user } })
  }

  render() {
    const { user } = this.state
    return (
      <>
        <section className="home-section flex full ">
          <div className="left-side">
            {!user ? (
              <>
                <h1 className="home-title">Buy bitcoin & crypto</h1>
                <p style={{ fontSize: '26px' }}>
                  Sign up today to easily buy{' '}
                  <span style={{ fontWeight: 'bold' }}>200+ cryptocurrencies</span>. Get started in
                  minutes with as little as <span style={{ fontWeight: 'bold' }}>$10</span>.
                </p>
                <Link to="/signup" className="signup-btn">
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="user-details">
                <h1>Hello {user.name}!</h1>
                <h3>🪙Coins: {user.coins}</h3>
                <h3>BTC: {user.btc}</h3>
              </div>
            )}
          </div>

          <div className="right-side">
            <video width="300" height="500" autoPlay loop>
              <source src={phoneVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="exchange-for-everyone-container">
          <h3 className="title">MissCoin is a crypto exchange for everyone</h3>
          <div style={{ gap: '180px' }} className="flex justify-center">
            <div className="clients">
              <h3 className="number">9M+</h3>
              <p className="info">Clients+</p>
            </div>
            <div className="countries-supported">
              <h3 className="number">190+</h3>
              <p className="info">Countries supported</p>
            </div>
            <div className="quarterly-trading-volume">
              <h3 className="number">$207B+</h3>
              <p className="info">Quarterly trading volume</p>
            </div>
          </div>
        </section>

        <section className="crypto-exchange flex" style={{ gap: '50px' }}>
          <div className="left-side" style={{ width: '60%' }}>
            <img src={buyImg} alt="img" />
          </div>
          <div className="right-side" style={{ width: '40%' }}>
            <h4>CRYPTO EXCHANGE</h4>
            <h1>Buy and sell crypto in minutes</h1>
            <div className="flex align-center">
              <img src={one} alt="one" />
              <p>Create your free MissCoin account</p>
            </div>
            <div className="flex align-center">
              <img src={two} alt="one" />
              <p>Connect your funding method</p>
            </div>
            <div className="flex align-center">
              <img src={three} alt="one" />
              <p>Buy and sell 200+ cryptocurrencies</p>
            </div>
            <Link to={'/contacts'} className="buy-crypto-btn">
              Buy crypto from contacts
            </Link>
          </div>
        </section>

        <section className="why-us">
          <h1>Why Us?</h1>
          <div style={{ gap: '180px' }} className="flex justify-center">
            <div className="simplicity">
              <img src={simplicityImg} alt="simplicity" />
              <h3 style={{ fontWeight: 'bold' }}>simplicity</h3>
              <p>MissCoin makes it easy to buy and sell crypto using our mobile apps. </p>
            </div>
            <div className="education">
              <img src={educationImg} alt="education" />
              <h3 style={{ fontWeight: 'bold' }}>Education</h3>
              <p>
                Not sure where to start? Head to our Learn Center and learn about all things crypto.
              </p>
            </div>
            <div className="service">
              <img src={serviceImg} alt="service" />
              <h3 style={{ fontWeight: 'bold' }}>Service</h3>
              <p>
                Find your answers instantly in our Support Center. Or reach us 24/7/365 on Live
                Chat, phone or by email.
              </p>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

const mapDispatchToProps = {
  // loadUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
