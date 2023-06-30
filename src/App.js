import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
