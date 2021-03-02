import React, {Component} from 'react';
import DisplayNumber from "../components/DisplayNumber";

export default class DisplayNumberRoot extends Component {
/*   constructor(props) {
    super(props);
  } */
  render(){
    return (
      <div>
        <h1>Display Numvber Root</h1>
        <DisplayNumber number={ this.props.number }></DisplayNumber>
      </div>
    )
  }
}
