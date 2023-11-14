export default function Tag(props) {
    
    const text = props.text
    return <div>
                <tag className="tag">{text}</tag>
            </div>
}