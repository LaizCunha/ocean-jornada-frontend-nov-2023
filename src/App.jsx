import { useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useState } from 'react'

function App() {

  const item1 = {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"]
  }

  const item2 = {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"]
  }

  const item3 = {
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"]
  }

  // const items = [ item1, item2, item3]
  const [items, setItems] = useState([])

  async function carregarDadosApi() {

    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItems(body.results)
  }
  useEffect(function () {
    carregarDadosApi()
  }, [])
  

  return (
    <>
      {items.map(function (element) {
        return <Card item={element} />
      })}
    </>
  )
}

export default App
