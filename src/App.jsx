import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp from './pages/CounterApp';
import Home from './pages/Home';
import ChallengeList from './pages/ChallengeList';
import ChallengePage from './pages/ChallengePage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="counterApp" element={<CounterApp />} />
          <Route path="challengelist" element={<ChallengeList />} />
          <Route path="challengepage/:id" element={<ChallengePage />} />
      </Routes>
    </BrowserRouter>
  );
   
}

export default App;
