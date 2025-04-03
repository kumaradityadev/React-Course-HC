import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const  [ counter , setcounter] = useState(0)
  const addvalue = () =>{
    
    setcounter(counter + 1)
  }
const removerValue = () => {
setcounter  (counter-1)
}
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addvalue}>Add Value : {counter}</button>
     <br/>
    <button onClick={removerValue}>Remove value : {counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
