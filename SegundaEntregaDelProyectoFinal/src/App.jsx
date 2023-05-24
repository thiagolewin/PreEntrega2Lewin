import { useState } from 'react'
import NavBar from './Components/navBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './Components/ItemDetailContainer/ItemDetailContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:cat" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:cat/:id" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="*" element={<h2>404</h2>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
