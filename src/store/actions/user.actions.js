import { userService } from '../../services/user.service'
import { bitcoinService } from '../../services/bitcoin.service'
import { SET_USER } from '../reducers/user.reducer'

export function loadUser() {
  return async (dispatch, getState) => {
    try {
      const user = userService.getUser(getState().userReducer)
      if (!user) return // NO USER FOUND!
      user['btc'] = await bitcoinService.getRate(user.coins)
      const action = {
        type: SET_USER,
        user,
      }
      dispatch(action)
    } catch (error) {
      console.log('error:', error)
    }
  }
}

// export function signUp() {
//   return async (dispatch, getState) => {
//     try {
//       const user = userService.getEmptyUser()
//       if (!user) return // NO USER FOUND!
//       user['btc'] = await bitcoinService.getRate(user.coins)
//       const action = {
//         type: SET_USER,
//         user,
//       }
//       dispatch(action)
//     } catch (error) {
//       console.log('error:', error)
//     }
//   }
// }
