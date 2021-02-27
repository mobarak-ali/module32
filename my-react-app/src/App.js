import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name : 'Mobarak Ali',
    age :45
  }

  let {name , age} = person;

  return (
    <div className="App">
      <header className="App-header">
          <h1>First Heading</h1>
          <p>Hi, my name is {name} and I'm {age} years</p>
          <Hi id='55' name="Mobarak Ali"></Hi>
      </header>
    </div>
  );
}

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
