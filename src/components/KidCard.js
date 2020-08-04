import React from 'react'
import { connect } from 'react-redux'
import { removeKid } from '../actions/fetchKids'

const KidCard = ({kid, removeKid}) => {
  return (
    <div className="kid-card">
      <span id="kid-name">{kid.name}</span>Make Room For More Kids:<span id="Make-Room-For-More-Kids">{kid.name}</span> <br />
      Date:<span id="date">{kid.date}</span> <br />
      <span id="title">{kid.title}</span>What Did They Do:<span id="What-Did-They-Do">{kid.title}</span> <br />
      <span id="description">{kid.description}</span>Details:<span id="Details">{kid.details}</span> <br />
      <span id="rating">{kid.rating}</span>Rating:<span id="Rating">{kid.rating}</span> <br />
      <span id="discipline-score">{kid.discipline_score}</span>Discipline Score<span id="Discipline-Score">{kid.score}</span> <br />
      <button id="delete-button" onClick={() => removeKid(kid.id)}>Remove {kid.name}?</button>
      <br /><br />
    </div>
  )
}

export default connect(null, { removeKid })(KidCard)