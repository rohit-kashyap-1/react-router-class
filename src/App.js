import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Support from './components/Support';
import Pricing from './components/Pricing';
import Vision from './components/Vision';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

// 5 and 6
//5 : switch
//6 latest   : routes 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/blog/b' exact element={<Homepage />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/support' exact element={<Support />} />
          <Route path='/pricing' exact element={<Pricing />} />
          <Route path='/vision' exact element={<Vision />} />
        </Routes>
      </Router>
      {/* about
      about/company
      about/vision
      about/abc
      */}
    </div>
  );
}

export default App;
