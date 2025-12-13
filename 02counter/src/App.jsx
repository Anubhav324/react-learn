import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)
  
  //let counter=15
  const addValue=() =>{
    //console.log("value added",counter);
    //counter=counter+1    //value no change (react can control change in the ui of the oages based on ehat ever required)
    if(counter<20){
    setCounter(counter+1)// use state sent all the bunch changes so writing multtiple time wint change anyhting
    //if somebody wants to do it they should use previous state because you will only get previous state once the state is completed
    setCounter(counter+1)
    setCounter(counter+1)}
  }
  const removeValue=() =>{
    if(counter>0){
    setCounter(counter-1)}
  }
 
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer</p>
      
    </>
  )
}

export default App
