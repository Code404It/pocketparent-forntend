import React, { Component } from 'react'
import KidCard from '../components/KidCard'
import { connect } from 'react-redux'
import { fetchKids } from '../actions/fetchKids'



class Kids extends Component {

  componentDidMount(){
    this.props.fetchKids()
  }

  render() {
    return(
      <div className="kids-container">
        {this.props.kids.map((k, id) => < KidCard key={id} kid={k} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    kids: state.kids
  }
}





export default connect(mapStateToProps,{fetchKids})(Kids)