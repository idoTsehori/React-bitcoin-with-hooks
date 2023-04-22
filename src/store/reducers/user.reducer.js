export const SET_USER = 'SET_USER'

const INITIAL_STATE = {
  // user: {
  //   name: '',
  //   coins: null,
  //   moves: [],
  // },
  user: null,
}

export function userReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }

    default:
      return state
  }
}
