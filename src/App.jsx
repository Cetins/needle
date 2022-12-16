import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App;