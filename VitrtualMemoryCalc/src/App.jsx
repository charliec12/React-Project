import React from 'react'
import './App.css';
import VmcDetails from './components/VmcDetails';
import VmcForm from './components/VmcForm';
import VmcHeader from './components/vmcheader';
import VmcCopyright from './components/VmcCopyright';

function App() {
  return (
    
    <div>
      <VmcHeader />
      <VmcDetails />
      <VmcForm />
      <VmcCopyright />
    </div>
    
  )
}

export default App
