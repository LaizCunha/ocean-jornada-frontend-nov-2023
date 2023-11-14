export default function Card(props) {
    const item = props.item

    return <div>
                <div className="card">
                    <h2>{item.name}</h2>
                    <div className="div-tag">
                    <tag className="tag">Status:Vivo</tag>
                    <tag className="tag">Espécie:Humana</tag>
                    <tag className="tag">Origem:Terra C-137</tag>
                </div>
                    <img src={item.imageURL} alt="teste"/>
                </div>
            </div>
}