import './App.css';
import AppBar from './components/AppBar/appbar';
import Card from './components/Card/card';
import Endereco from './components/Endereco/endereco';
import Restaurantes from './components/Restaurantes/restaurantes';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <div className='Endereco'>
        <Endereco/>
        <div className='cards'>
          <Card/>
        </div>
        <div className='restaurantes'>
            <Restaurantes/>
        </div>
      </div>
    </div>
  );
}

export default App;
