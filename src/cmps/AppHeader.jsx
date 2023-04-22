import { Link, NavLink, withRouter } from 'react-router-dom'

function _AppHeader() {
  return (
    <header className="main-header flex space-between align-center">
      <NavLink className="logo" exact to="/">
        MissCoin
      </NavLink>
      <nav className="main-nav">
        <ul className="main-menu clean-list">
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/chart">Chart</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
// export class AppHeader extends Component {
//   render() {
//     const { setActiveComponent } = this.props
//     return (
//       <header className="main-header flex space-between align-center">
//         <div onClick={() => setActiveComponent('home')} className="logo">
//           BitCoin
//         </div>
//         <nav className="main-nav">
//           <ul className="main-menu clean-list">
//             <li onClick={() => setActiveComponent('contact')}>Contacts</li>
//             <li onClick={() => setActiveComponent('chart')}>Chart</li>
//           </ul>
//         </nav>
//         {/* <button type="button" onclick="toggleMenu()">
//           ☰
//         </button> */}
//       </header>
//     )
//   }
// }
export const AppHeader = withRouter(_AppHeader)
