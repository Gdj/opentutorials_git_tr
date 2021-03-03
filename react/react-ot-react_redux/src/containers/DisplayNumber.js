import DisplayNumber from "../components/DisplayNumber";
import {connect} from "react-redux";

/* 리덕스 갱신될때마다 호출 :  reduxState -> reactProps 
  (store.getState(), this.props)
*/
function mapReduxStateToReactProps(state){
  return {
    number : state.number
  }
}
/* 리덕스 갱신될때마다 호출 :  reduxDispatch -> reactProps 
  (store.dispatch, this.props)
*/
function mapReduxDispatchToReactProps(dispatch){
  return {
    onClick : function(param){
      dispatch({type:'TYPE_DIV', value:param});
    }
  }
}


export default connect(mapReduxStateToReactProps)(DisplayNumber);


/* import React, {Component} from "react";
import store from "../store";

export default class extends Component {
  state = {number:store.getState().number }
  constructor(props) {
    super(props);
    store.subscribe(function(){
      this.setState({number:store.getState().number} );
    }.bind(this));
  }

  render() {
    return (<DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>)
  }
} */