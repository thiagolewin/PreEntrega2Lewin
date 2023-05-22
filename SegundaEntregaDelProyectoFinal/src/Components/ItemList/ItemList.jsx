import { useState } from "react"
import Item from "../Item/Item";
import './ItemList.css'
function FilterList({children,players}) {
    const [searchWord, setSearchword] = useState("");
    function OnChange(e) {
        setSearchword(e.target.value)
    }
    function FilterItems() {
        if (searchWord === "") {
            return players
        } else {
            return players.filter((player) => {
                 return (((player.name).toLowerCase()).includes(searchWord.toLowerCase()))
            })
        }
    }
    return children(OnChange,FilterItems())
}

export default function ItemList({players}) {
    return (
        <div className="jugadores">
            <FilterList players={players}>
            {
                (OnChange,FilterItems) => (
                <>
                    <input type="text" onChange={OnChange}/>
                    {FilterItems.map((item)=> {
                        return <Item key={item.id} {...item}></Item>
                    })}
                </>
                )
            }
            </FilterList>
        </div>
     
    )
}