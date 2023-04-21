import react, { useState } from 'react'
import Navigation from './components/Navigation'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container'>
        <Navigation />
        <h1>Hello World</h1>
        <Card
        title="Title 1" 
        detail="Card Detail"/>

        <Card
        title="Title 2" 
        detail="this is a detail2"/>
      </div>
  );
}

export default App
