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
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemListContainer />} />
          <Route exact path="/bienvenida" element={<Bienvenida/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="*" element={<NoFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
