import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <h2>Hell</h2>
      <h1 className='bg-green-600'> Hello</h1>
    </>
  )
}

export default App
