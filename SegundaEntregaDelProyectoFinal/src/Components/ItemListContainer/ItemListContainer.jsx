import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import UseFetch from '../../hooks/useFetch'
import ItemList from '../ItemList/ItemList'
export default function ItemListContainer() {
    let [products,setProducts] = useState([])
    const players = UseFetch('https://futdb.app/api/players?page=1',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-AUTH-TOKEN': '633ed2a1-3292-4dc0-99c0-74c2b2024e1f'
        }
      })
    if (players.length== 0) {
        return <h2>Loading...</h2>
    } else {
        console.log(players)
        return (
            <>
            <ItemList players={players} />
            </>
        )
    }
}