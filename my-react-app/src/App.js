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
      </header>
    </div>
  );
}

export default App;
