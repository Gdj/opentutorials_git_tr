import React, {Component} from 'react';
//import DisplayNumber from "../components/DisplayNumber";
import DisplayNumber from "../containers/DisplayNumber";

export default class DisplayNumberRoot extends Component {
/*   constructor(props) {
    super(props);
  } */

  render(){
    return (
      <div>
        <h1>Display Numvber Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    )
  }
}
