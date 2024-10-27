import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';

function App() {

  return (
    <div className="App">
      <nav>
          <Link to="/">Home</Link>
          <Link to="/jewelry">Jewelry</Link>
          <Link to="/electronics">electronics</Link>
      </nav>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jewelry' element={<Jewelry />} />
        <Route path='/electronics' element={<Electronics />} />
    </Routes>
    </div>
  );
}

export default App;
