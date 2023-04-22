import { storageService } from '../services/storage.service'

export const userService = {
  getUser,
  getEmptyUser,
  signUp,
  addMove,
  UserPay,
}
const KEY = 'user'
// const user = {
//   name: 'Ochoa Hyde',
//   coins: 100,
//   moves: [],
// }

function signUp(name) {
  const loggedInUser = storageService.load(KEY)
  if (loggedInUser) return
  const user = {
    name,
    coins: 100,
    moves: [],
  }
  storageService.store(KEY, user)
  return user
}

function getEmptyUser() {
  return {
    name: '',
    coins: 100,
    moves: [],
  }
}

function getUser() {
  return storageService.load(KEY)
}

function addMove(move) {
  const user = getUser()
  user.moves.unshift(move)
  storageService.store(KEY, user)
}

function UserPay(amount) {
  const user = getUser()
  const newCoins = user.coins - amount
  user.coins = newCoins
  storageService.store(KEY, user)
}
