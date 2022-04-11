export let INITIAL_STATE = null

export const Reducer = (state, action) => {
  if (action.type === 'USER') {
    return action.payload
  }
  return state
}

// INITIAL_STATE = {
//   loggedIn: localStorage.getItem('isLoggedin') || false,
// }