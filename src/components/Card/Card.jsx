import { Link } from "react-router-dom"
import Tag from "../Tag/Tag"

export default function Card(props) {
    const item = props.item
    const tags = item.tags || []

    return <Link to={`/${item.id}`}> 
                <div className="cards">
                    <div className="card">
                        <h2>{item.name}</h2>
                        <div className="div-tag">
                            {tags.map(function (element) {
                                return <Tag text={element} />
                            })}
                        </div>
                        <img src={item.image} alt="teste"/>
                    </div>
                </div>
            </Link>
}