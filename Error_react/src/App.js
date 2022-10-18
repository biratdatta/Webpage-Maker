import logo from './logo.svg';
import './App.css';
import Error from './Components/Error';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Error />
        </p>
       
      </header>
    </div>
  );
}

export default App;
