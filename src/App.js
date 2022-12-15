import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import Portfolio from './Component/Portfolio/Portfolio';




function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Services' element={<Services/>}/>
        <Route exact path='/Portfolio' element={<Portfolio/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>

      </Routes>
    </Router>
  </>
  );
}

export default App;
