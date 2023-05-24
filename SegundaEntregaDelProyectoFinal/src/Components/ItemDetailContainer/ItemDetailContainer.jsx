import { useParams } from "react-router-dom"
export default function ItemDetail(){
    let params = useParams()
    params = params.id
    return (
        <h2>{params}</h2>
    )
}