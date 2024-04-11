import logo from './CDLogo.svg';
import './App.css';
import AlbumList from './AlbumList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AlbumList />
    </div>
  );
}

export default App;
