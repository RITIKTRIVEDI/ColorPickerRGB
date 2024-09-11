
import { useState } from 'react';
import './App.css';

function App() {
  const[color1,setColor1]=useState(0);
  const[color2,setColor2]=useState(0);
  const[color3,setColor3]=useState(0);
  return (
<>
    <div class="container">
      <h1>Color Picker Using RGB </h1>
      <input type='range' min="0" max="255" onChange={e=>
      setColor1(e.target.value)
  } value={color1} /> 
     <p>value of R {color1}</p>
      <input type='range' min="0" max="255" onChange={e=>
      setColor2(e.target.value)} value={color2} />
      <p>value of G {color2}</p>
      <input type='range' min="0" max="255" onChange={e=>
      setColor3(e.target.value)} value={color3} /> 
      <p>value of B {color3}</p>
      <h4> value of RGB {`(${color1},${color2},${color3})`}</h4>
      <div 
      className="box" 
      style={{ backgroundColor: `rgb(${color1},${color2},${color3})`,
       border: "4px solid black", 
       width: "200px", 
       height: "100px" }}>
      </div>
      
    </div>
    <footer> Made By Ritik Trivedi</footer>
</>  );
}

export default App;
