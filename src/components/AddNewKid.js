import React, { Component } from 'react'
import { addKid } from '../actions/fetchKids'
import { connect } from 'react-redux'


class AddNewKid extends Component{
    state = {
      name: '',
      date: '',
      title: '',
      description: '',
      rating:'',
      discipline_score:''
    }
    

  handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}


handleSubmit = (e) => {
  e.preventDefault()
 this.props.addKid(this.state)
  document.getElementById('new-kid-form').reset()
  this.props.history.push('/kids')
}




render() {

  return (
    <div>
     
      <form id="new-kid-form" onSubmit={this.handleSubmit}>
      <h3>New Kid On The App</h3>
      <label>Name</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>
      <br /> <br />
      
      <label>Date</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.date} name="date"/>
      <br /> <br />

      <label>Title</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.title} name="title"/>
      <br /> <br />

      <label>Description</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.description} name="description"/>
      <br /> <br />

      <label>Rating</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.rating} name="rating"/>
      <br /> <br />

      <label>Discipline Score</label> <br />
      <input type="text" onChange={this.handleChange} value={this.state.discipline_score} name="discipline_score"/>
      <br /> <br />

      

      <input type="submit" value="New Kid Maker" />
    </form>
    </div>
  )
}
}







export default connect(null, { addKid })(AddNewKid)