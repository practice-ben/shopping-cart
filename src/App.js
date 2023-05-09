import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Services from './components/Services';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
