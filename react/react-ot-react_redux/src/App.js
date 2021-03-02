import React, {Component} from 'react';
import './App.css';
import AddNumberRoot      from "./components/AddNumberRoot";
import DisplayNumberRoot  from "./components/DisplayNumberRoot";

/* 클래스 형태 */
class App extends Component {
  state = {number:0};
  render (){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size})
          //console.log(this.state.number + size); 
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={ this.state.number }></DisplayNumberRoot>
      </div>
    );
  }
}

/* 
  함수형태
function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot> 
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
} 
*/


export default App;
