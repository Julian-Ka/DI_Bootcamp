import logo from './logo.svg';
import './App.css';
import React from 'react';





function App() {
  const myelement = <h1>I love JSX!</h1>;

const noJSX =  React.createElement("h1",{},"I do not use JSX!");

const sum = 5 + 5;

const listItems = <ul>
                      <li>Apples</li>
                      <li>Bananas</li>
                      <li>Cherries</li>
                  </ul>;

var name = "John";
var age = 12;

  return (

    <div>

      <h1>Hello World!</h1>
      {myelement}
        {noJSX}
        <h1>React is {sum} times better with JSX</h1>

        {listItems}
        <h1>I am a header</h1>
        <h1>I am a header too</h1>


        <input type="text" />
        <p> {name} is {age} years old</p>

    </div>




  );
}

export default App;
