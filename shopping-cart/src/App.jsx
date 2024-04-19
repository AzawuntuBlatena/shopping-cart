import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/header'
import Home from './page/home'
import Cart from './page/cart'

function App() {

  return (
  
      <div>
       <Header/>
       <Routes>
        <Route exact path='/'  element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
       </Routes>
      </div>
  )
}

export default App
