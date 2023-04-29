// import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Meals from "./pages/Meals"
import Drinks from "./pages/Drinks"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='meals' element={ <Meals /> } />
        <Route path='drinks' element={ <Drinks /> } />
      </Routes>
    </div >
  )
}

export default App
