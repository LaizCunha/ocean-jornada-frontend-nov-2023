export default function Card(props) {
    const item = props.item

    return <div>
                <div className="card">
                    <h2>{item.name}</h2>
                    <div className="div-tag">
                    <tag className="tag">Status:{item.status}</tag>
                    <tag className="tag">Espécie:{item.especie}</tag>
                    <tag className="tag">Origem:{item.origem}</tag>
                </div>
                    <img src={item.imageURL} alt="teste"/>
                </div>
            </div>
}