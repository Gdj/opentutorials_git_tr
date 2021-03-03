import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from "react-router-dom";

function Home(){
  return (
    <div>
      <h2>Home</h2>
      <p>home...</p>
    </div>
  )
}


var contents = [
  {id:1, title:'HTML',  description:'HTML is...'},
  {id:2, title:'JS',    description:'JS is...'},
  {id:3, title:'React', description:'React is...'}
];

function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  /* 페이 없을때 */
  var selected_topic = {
    title:'Sorry',    description:'Not Found'
  }
  for(var i=0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics(){
  var lis = [];
  for(var i=0; i<contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink  to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
      <h2>Topics</h2>
      <p>topics...</p>
      <ul>
        {/* 
        <li><NavLink to="/topics/1">html</NavLink></li>
        <li><NavLink to="/topics/2">js</NavLink></li>
        <li><NavLink to="/topics/3">React</NavLink></li>
         */}
        {lis}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      <Switch>
        {/* 
        <Route path="/topics/1">html...</Route>
        <Route path="/topics/2">js...</Route>
        <Route path="/topics/3">React...</Route> 
        */}
      </Switch>
    </div>
  )
}

function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      <p>contact...</p>
    </div>
  )
}

function App(){
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact </NavLink></li>
      </ul>

      <Switch>
        <Route exact path="/" ><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not found Error404</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
