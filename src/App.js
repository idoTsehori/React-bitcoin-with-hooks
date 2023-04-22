import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import './assets/scss/global.scss'

import { Component } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './views/HomePage'
import { StatisticPage } from './views/StatisticPage'
import { ContactDetailsPage } from './views/ContactDetailsPage'
import { ContactPage } from './views/ContactPage'
import { AppFooter } from './cmps/AppFooter'
import { About } from './views/About'
import { ContactEdit } from './views/ContactEdit'
import { SignupPage } from './views/SignupPage'

function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <main className="main-layout">
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/chart" component={StatisticPage} />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}
// class App extends Component {
//   state = {
//     activeComponent: 'home',
//   }

//   setActiveComponent = (component) => {
//     this.setState({ activeComponent: component })
//   }

//   render() {
//     const { activeComponent } = this.state

//     let componentToRender

//     switch (activeComponent) {
//       case 'home':
//         componentToRender = <HomePage />
//         break
//       case 'contact':
//         componentToRender = <ContactPage />
//         break
//       case 'chart':
//         componentToRender = <StatisticPage />
//         break
//       default:
//         componentToRender = <HomePage />
//     }

//     return (
//       <section className="app">
//         <AppHeader setActiveComponent={this.setActiveComponent} />
//         <section className="main-layout">
//           {componentToRender}
//           <AppFooter />
//         </section>
//       </section>
//     )
//   }
// }

export default App
