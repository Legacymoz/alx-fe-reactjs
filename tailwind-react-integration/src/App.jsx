import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className ="bg-blue-700 text-red-950">My name is Mozart</p>
      <UserProfile />
    </>
  );
}

export default App
