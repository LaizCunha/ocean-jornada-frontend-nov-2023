import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ReadById() {

    const { id } = useParams()
    const [item, setItem] = useState({})

    async function carregarDadosApi() {
        
        const apiUrl = `https://rickandmortyapi.com/api/character/${id}`

        const response = await fetch(apiUrl)
        const body = await response.json()

        setItem(body)
       
        // IMPLEMENTAR O CARREGAMENTO DA API NA URL:
        // GUARDAR A INFORMAÇÃO RECEBIDA DA API EM UM ESTADO
    }

    useEffect(function() {
        carregarDadosApi()
    }, [])


    // EXIBIR ESSAS INFORMAÇÕES NO JSX

    return <div>ReadById: { id } - {item.name}</div>
}