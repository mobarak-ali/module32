// import logo from './logo.svg';
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
          <p>Hi, my name is {name} and I'm {age} years</p>
          <Hi id='55' name="Mobarak Ali"></Hi>
          <Item product = {products[0]} ></Item>
          <Item product = {products[1]} ></Item>
          <Item product = {products[2]} ></Item>
      </header>
    </div>
  );
}

// Product

let Item = (props) =>{

  const css = {
    margin: '15px',
    padding: '20px',
    backgroundColor: 'limegreen',
    borderRadius: '5px'
  }
  console.log(props);

  const {name, price } = props.product;

  return (
    <div style = {css}>
      {/* <h3>{props.product.name}</h3>
      <h2>{props.product.price}</h2> */}
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
