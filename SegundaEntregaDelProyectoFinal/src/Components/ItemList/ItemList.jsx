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
        if (searchWord === "") {
            if(params) {
                return data.filter((data)=> {
                    return (data.type === params)
                }) 
            } else {
                return data
            }
        } else {
            return data.filter((data) => {
                if(params) {
                    return (((data.name).toLowerCase()).includes(searchWord.toLowerCase()) && data.type === params)
                } else {
                    return (((data.name).toLowerCase()).includes(searchWord.toLowerCase()))
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