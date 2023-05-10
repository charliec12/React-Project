import React, { useState } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import FeaturePost from './FeaturePost'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navigation/>
      <Hero/>
      <FeaturePost/>
      <Footer/>
    </div>
  );
}

export default App;
