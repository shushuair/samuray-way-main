import React from 'react';
import './App.css';
import Rating from './components/Rating';
import Redd from './components/Redd';


function App() {
  console.log("App rendering");
  
  return (
    <div>
      article 1
    <Rating value={3}/>
     <PageTitle title="animals"/>
     <PageTitle title="girls"/>
     article 2
     <Rating value={4}/>
     <Redd titleValue={"Menu"}/>
     <Redd titleValue={"Users"}/>
    </div>   
  );
}

function PageTitle(props:any) { 
  debugger
  console.log("PageTitle rendering");
  return <h1> {props.title} </h1>;
}

export default App;
