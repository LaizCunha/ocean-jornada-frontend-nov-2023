import { useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useState } from 'react'

function App() {

  // const items = [ item1, item2, item3]
  const [items, setItems] = useState([])

  async function carregarDadosApi() {

    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results.map(function (element) {
      return {
        name: element.name,
        image: element.image,
        tags: [
          `Status: ${element.status}`,
          `Species: ${element.species}`,
          `Origin: ${element.origin.name}`
        ]
      }
    })

    setItems(results)
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
