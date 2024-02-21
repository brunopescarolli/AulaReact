import './App.css';
import AppBar from './components/AppBar/appbar';
import Card from './components/Card/card';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <div className='cards'>
        <Card/>
      </div>
    </div>
  );
}

export default App;
