import React from 'react'
import AppLayout from './AppLayout'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Header>make it stay</Header>
        <Home />
      </AppLayout>
    </div>
  )
}

export default App
