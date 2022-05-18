import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Empoyeeregister from './components/Empoyeeregister';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Viewemployee from './components/Viewemployee';

function App() {
  return (
    
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<Empoyeeregister/>}/>
    <Route path="/search" exact element={<Search/>}/>
    <Route path="/view" exact element={<Viewemployee/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
