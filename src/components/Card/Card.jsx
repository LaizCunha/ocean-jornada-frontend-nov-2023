import Tag from "../Tag/Tag"

export default function Card(props) {
    const item = props.item
    const tags = item.tags || []

    return <div>
                <div className="card">
                    <h2>{item.name}</h2>
                    <div className="div-tag">
                        {tags.map(function (element) {
                            return <Tag text={element} />
                        })}
                </div>
                    <img src={item.imageURL} alt="teste"/>
                </div>
            </div>
}