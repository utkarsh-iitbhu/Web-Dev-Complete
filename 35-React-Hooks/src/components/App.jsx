import React from "react";
import ReactDOM from "react-dom";
function App(){

  const now = new Date().toLocaleTimeString();
const [count,setCount] = React.useState(0);
const [time,setTime] = React.useState(now);

function updTime(){
  const newTime = new Date().toLocaleTimeString();
  setTime(newTime);
}

function add(){
  setCount(count+1); 
}
function del(){
  setCount(count-1);
}

const [bgcolor,setbg] = React.useState(false);
function mouseover(){
  setbg(true);
}
function mouseout(){
  setbg(false);
}

return(
  <div className="container">
    <h1>{count}</h1>
    <br></br>
    <h1>{time}</h1>
    <button onClick={add}>+</button>
    <button onClick={del}>-</button>
    <button onClick={updTime}>T</button>
    <button  
    style= {{ backgroundColor: bgcolor ? "black" : "grey" }} 
    onMouseOver = {mouseover}
    onMouseOut = {mouseout}
    onClick={updTime}
     >X</button>
  </div>
);

}
export default App;
