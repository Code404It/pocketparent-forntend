import React from 'react'
import { connect } from 'react-redux'
import { removeKid } from '../actions/fetchKids'

const KidCard = ({kid, removeKid}) => {
  return (
    <div className="kid-card">
     Name: <span id="kid-name">{kid.name}</span><br />
      Date (DD/MM/YYYY): <span id="date">{kid.date}</span> <br />
      What Did They Do: <span id="title">{kid.title}</span> <br />
      Details: <span id="description">{kid.description}</span><br />
      Rating (1 to 5): <span id="Rating">{kid.rating}</span> <br />
      Discipline Score (1-100): <span id="Discipline-Score">{kid.discipline_score}</span> <br />
      <button id="delete-button" onClick={() => removeKid(kid.id)}>Remove {kid.name}?</button>
      <br /><br />
    </div>
  )
}

export default connect(null, { removeKid })(KidCard)