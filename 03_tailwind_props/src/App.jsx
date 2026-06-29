import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "Rahul",
    age: 21
  }

  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-2xl p-4 w-48 rounded-2xl mb-4'>Tailwind test</h1>
      <Card username = "CodeClick" btnText = "Click me" someObj = {myObj} someArr = {myArr}/>
      <Card username = "LearnReact" btnText = "Learn more"/>
    </>
  )
}

export default App
