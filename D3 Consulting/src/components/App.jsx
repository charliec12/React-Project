import React, { useState } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navigation/>
      <Hero/>
    </div>
  );
}

export default App;
