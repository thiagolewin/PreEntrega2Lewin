import './Item.css'
export default function Item ({...props}) {

    console.log("props")
    return (
        <div className="item">
            <h3>{props.name}</h3>
        </div>
    )
}