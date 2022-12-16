import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className='hero-text'>Bir Peri Masali</p>

      <div className='light-container'>
        <h1>h1 - Main Title</h1>
        <h2>h2 - Subtitle</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facere exercitationem doloremque hic dolorum iste, aperiam expedita, repellat tempore eius quos. Quo cum fuga iure assumenda numquam error rerum id <a href='#link'>link</a>.</p>
      </div>
    </div>
  )
}

export default App
