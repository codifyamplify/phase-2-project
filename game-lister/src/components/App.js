import '../App.css';
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p className="paragraph">
          Something is present for display purposes.
        </p>
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
