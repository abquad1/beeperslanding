
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Sample from './Components/Sample/Sample';
import TextSection from './Components/textSection/TextSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Sample' element={<Sample/>}></Route>
        <Route path='/#text-section' element={<TextSection />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
