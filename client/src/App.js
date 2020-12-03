import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 


function App() {

  const fetchGET = () => {

    axios.get('https://web-36-api.herokuapp.com/api/e'); 


  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchGET}>Fetch</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
