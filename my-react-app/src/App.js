//import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  let person = {
    name : 'Mobarak Ali',
    age :45
  }

  let {name , age} = person;

  const products = [
    { name : 'Photoshop',   price : "$95" },
    { name : 'Illustrator', price : "$45" },
    { name : 'Flash',       price : "$5" },
  ]
 
  return (
    <div className="App">
      <header className="App-header">
          <h1>First Heading</h1>
          <User></User>
          <Counter></Counter>
          <ul>
            {
             products.map(product =>  <li> {product.name} </li>)
            }
          </ul>
          <p>Hi, my name is {name} and I'm {age} years</p>
          
          <Hi id='55' name="Mobarak Ali"></Hi>
          {
            products.map(val=> <Item product = {val} ></Item> )
          }
      </header>
    </div>
  );
}

// Dynamic User

function User (){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
         users.map(user => <li>{user.name}</li>) 
        }
      </ul>
    </div>
  )
}



// Counter
function Counter(){

  const [ count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {() =>setCount(count + 1)}>Increase</button>
      <button onClick = {() =>(count>=1)?setCount(count - 1):setCount(0)}>Decrease</button>
    </div>
    )
}

// Product 

let Item = (props) =>{

  const css = {
    margin: '15px',
    padding: '20px',
    backgroundColor: 'limegreen',
    borderRadius: '5px',
  }

  const {name, price } = props.product;

  return (
    <div style = {css}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
 

// HI defined here
let Hi = (prop) => {
  const style ={
    color: 'red',
    backgroundColor: 'yellow',
    padding: '15px'
  };
  return (
    <div style = {style}>
      {prop.name} {prop.id}
    </div>
  );
};

export default App;