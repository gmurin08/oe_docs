import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FillExample from './FillExample'

function App() {
  const [count, setCount] = useState(0)

  return (<>
      <FillExample/>
    </>
  )
}

export default App
