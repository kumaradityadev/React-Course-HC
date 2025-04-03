import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const addCut = ()=> {
  setCount(count + 1)
}
const  removeCut = ()=> {
  setCount(count - 1)
}
  return (
    <>
    <h1>Mishra se badla lena hai..</h1>
    <h2> Count Body Cut</h2>
    <button onClick={addCut}> Add Body cut : {count}</button>
    <br />
    <button onClick={removeCut}>Remove Body Cut : {count}</button>
  <p>Somya : {count} </p>
    </>
  )
}

export default App
