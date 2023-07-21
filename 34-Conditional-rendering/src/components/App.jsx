import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLog = false; 

// function render(){
//   if(isLog == true){
//     return <h1>Hello</h1>
//   }else{
//     return <Login />; 
  
//   }
// }

const curtime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLog ? <h1>Hello</h1> : <Login /> }
      {/* {curtime > 21 ? <h1>Go sleep da</h1> : null} */}
      {curtime > 12 && <h1>Go sleep da</h1> }

    </div>
  );
}

export default App;
