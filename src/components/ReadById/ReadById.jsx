import { useParams } from "react-router-dom"

export default function ReadById() {

    const { id } = useParams()
    const apiUrl = `https://rickandmortyapi.com/api/character/`
    // IMPLEMENTAR O CARREGAMENTO DA API NA URL:
    // GUARDAR A INFORMAÇÃO RECEBIDA DA API EM UM ESTADO
    // EXIBIR ESSAS INFORMAÇÕES NO JSX

    return <div>ReadById: { id } </div>
}