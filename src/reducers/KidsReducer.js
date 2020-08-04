export default (state = [], action) => {
    switch(action.type) {
      case "SET_KIDS":
        return [...action.payload]
      case "ADD_NEW_KID":
        return [...state, action.payload]
      case "REMOVE_KID":
        let NewKid = state.filter((kid) => kid.id !== action.payload)
        return [...NewKid]
      default:
        return state
    }
  }