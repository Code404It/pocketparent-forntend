import React from 'react'
import { useHistory } from 'react-router-dom'

const AddKidButton = props => {
  const history = useHistory()
  return (
    <button id="add-button" onClick={() => history.push("/kids/new")}>{props.name}</button>
  )
}

export default AddKidButton