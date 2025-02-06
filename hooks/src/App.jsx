import { useState } from "react"

function App() {
  let [counter, setCounter] =useState(0)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter APP</h1>
      <p>Value is {counter}</p>
      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <br></br>
      <footer>site number is {counter}</footer>
    </>
  )
}

export default App
