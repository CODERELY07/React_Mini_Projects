import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp from './pages/CounterApp';
import Home from './pages/Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="counterApp" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  );
   
}

export default App;
