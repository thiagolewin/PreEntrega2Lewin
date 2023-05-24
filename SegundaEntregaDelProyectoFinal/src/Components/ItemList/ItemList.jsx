import { useState } from "react"
import Item from "../Item/Item";
import './ItemList.css'
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetailContainer/ItemDetailContainer";
function FilterList({children,data,params}) {
    const [searchWord, setSearchword] = useState("");
    function OnChange(e) {
        setSearchword(e.target.value)
    }
    function FilterItems() {
        let filtrado = data.filter((data)=> {
            if(data.type == "players") {
                console.log(data)
                return (data.defending > 0)
            } else {
                return data
            }
        })
        if (searchWord === "") {
            if(params) {
                return filtrado.filter((filtrado)=> {
                    return (filtrado.type === params)
                }) 
            } else {
                return filtrado
            }
        } else {
            return filtrado.filter((filtrado) => {
                if(params) {
                    return (((filtrado.name).toLowerCase()).includes(searchWord.toLowerCase()) && filtrado.type === params)
                } else {
                    return (((filtrado.name).toLowerCase()).includes(searchWord.toLowerCase()))
                }
            })
        }
    }
    return children(OnChange,FilterItems())
}

export default function ItemList({data}) {
    let params = useParams()
    let paramsCat = params.cat
    return (
        <div className="dataInput">
            <FilterList data={data} params = {paramsCat}>
            {
                (OnChange,FilterItems) => (
                <>
                    <input type="text" onChange={OnChange}/>
                    <div className="data">
                    {FilterItems.map((item,i)=> {
                        return <Item type={item.type} key={i} {...item}></Item>
                    })}
                    </div>
                </>
                )
            }
            </FilterList>
        </div>
     
    )
}