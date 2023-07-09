import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {window.state.getState() ? <h1>main</h1> : <h1>trim</h1>}
    </div>
  );
}

export default App;
