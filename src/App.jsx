import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Theme from './Components/Theme'
import Market from './Components/Market'
import Table from './Components/Table'


function App() {
  

  return (
    <>
    <Header/>
    <Theme/>
    <Market/>
    <Table/>
    
    </>
  )
}

export default App
