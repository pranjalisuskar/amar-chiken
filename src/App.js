import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Component/MainComponent/Master';
import Home from './Component/MainComponent/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Home} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
