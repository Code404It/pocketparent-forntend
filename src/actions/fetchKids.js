export const fetchKids = () => {
  return(dispatch) => {
    return fetch('http://localhost:3000/kids')
    .then(resp => resp.json())
    .then(kids => {
      dispatch({ type: "SET_KIDS", payload: kids })
    })
  }
}


export const addKid = kid => {
  return(dispatch) => {
    return fetch('http://localhost:3000/kids', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({kid:kid})
    })
    .then(resp => resp.json())
    .then(kid => {
      dispatch({ type: "ADD_KID", payload: kid })
    })
  } 
}

export const removeKid = kidId => {
  return(dispatch) => {
    return fetch(`http://localhost:3000/kids/${kidId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(kid => {
      dispatch({ type: "REMOVE_KID", payload: kidId })
    })
  } 
}