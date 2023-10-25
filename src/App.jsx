import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Contador from './components/contador/contador'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoFound from './components/notFound/noFound'
import Bienvenida from './components/bienvenida/bienvenida'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemListContainer />} />
          <Route exact path="/bienvenida" element={<Bienvenida />} />

          <Route path="*" element={<NoFound />} />
        </Routes>
      < Contador />
    </BrowserRouter>
  )
}

export default App
