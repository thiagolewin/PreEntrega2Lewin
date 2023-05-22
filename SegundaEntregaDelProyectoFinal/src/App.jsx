import { useState } from 'react'
import NavBar from './Components/navBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </>
  )
}

export default App
