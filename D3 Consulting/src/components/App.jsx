import React, { useState } from 'react'
import Navigation from './Navigation'
import Hero from './Hero'
import FeaturePost from './FeaturePost'
import AllPost from './AllPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navigation/>
      <Hero/>
      <FeaturePost/>
      <AllPost/>
    </div>
  );
}

export default App;
