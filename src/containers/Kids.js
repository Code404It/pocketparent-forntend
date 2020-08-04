import React, { Component } from 'react'
import KidCard from '../components/KidCard'
import { connect } from 'react-redux'
import { fetchKids } from '../actions/fetchKids'
//import AddKidButton from '../components/AddKidButton'


class Kids extends Component {

  componentDidMount(){
    this.props.fetchKids()
  }

  render() {
    return(
      <div className="kids-container">
        {/* < AddKidButton name="Add Kid" addKid={this.props.addKid}/> */}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchKids: () => dispatch(fetchKids()),
//     //addKid: kid => dispatch(addKid(kid))
//   }
// }



export default connect(mapStateToProps,{fetchKids})(Kids)