import logo from './logo.svg';
import './App.scss';
import MyComponent3 from './example/MyComponent3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Tuan Anh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent3 />
      </header>
    </div>
  );
}

export default App;
