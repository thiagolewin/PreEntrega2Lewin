import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import UseFetch from "../../hooks/useFetch"
import './ItemDetailContainer.css'
async function TraerImagen(cat,id,SetImg) {
    let imagen = await fetch('https://futdb.app/api/'+cat+'/'+ id+'/image',{
        method: 'GET',
        headers: {
          'Accept': 'image/png',
          'X-AUTH-TOKEN': '8baa8fe3-7269-40d0-b204-815edcad1fb8'
        }
      })
    imagen = await imagen.blob()
    imagen = URL.createObjectURL(imagen)
    SetImg(imagen)
}
export default function ItemDetail(){
    let [img,setImg] = useState("")
    let params = useParams()
    let id = params.id
    let cat = params.cat
    let imagen =""
    let dato = cat.substring(0,cat.length-1)
    let url = 'https://futdb.app/api/' + cat + '/' + id
    let data = UseFetch(url,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-AUTH-TOKEN': '8baa8fe3-7269-40d0-b204-815edcad1fb8'
        }
      })
    useEffect(()=>{
        TraerImagen(cat,id,setImg)
    },[])
    console.log(img)
    data = data[dato]
    if(data) {
        if(dato == "player") {
            return (
                <div className="itemDetailed">
                    <img src={img} alt="" />
                    <h1>{data.name}</h1>
                    <h4>{data.position}</h4>
                    <div className='stats'>
                        <h5>{data.pace} PAC</h5>
                        <h5>{data.dribbling} DRI</h5>
                        <h5>{data.shooting} SHO</h5>
                        <h5>{data.defending} DEF</h5>
                        <h5>{data.passing} PAS</h5>
                        <h5>{data.physicality} PHY</h5>
                    </div>
                </div>
            )           
        } else {
            return (
                <div className="itemDetailed">
                    <h1>{data.name}</h1>
                </div>
            )       
        }
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}