import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import UseFetch from '../../hooks/useFetch'
import ItemList from '../ItemList/ItemList'
function Buttons({children, setButton}) {
    function OnClick(e) {
        if(e.target.textContent == "Jugadores") {
            setButton(0)
        } else if(e.target.textContent == "Equipos") {
            setButton(1)
        } else {
            setButton(2)
        }
        
    }

    return(children(OnClick))
}
function llamadoApi(jugadores,equipos,ligas) {

    const players = UseFetch(jugadores,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-AUTH-TOKEN': '8baa8fe3-7269-40d0-b204-815edcad1fb8'
        }
      })
      if (players) {
        players.map((item)=> {
          item.type = "players"
        })
      }
      const teams = UseFetch(equipos,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-AUTH-TOKEN': '8baa8fe3-7269-40d0-b204-815edcad1fb8'
        }
      })
      if (teams) {
        teams.map((item)=> {
          item.type = "teams"
        })
      }
      const leagues = UseFetch(ligas,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'X-AUTH-TOKEN': '8baa8fe3-7269-40d0-b204-815edcad1fb8'
        }
      })
      leagues.map((item)=> {
        item.type = "leagues"
      })
      return players.concat(teams).concat(leagues)
}
export default function ItemListContainer() {
    const datosApi = llamadoApi('https://futdb.app/api/players','https://futdb.app/api/clubs','https://futdb.app/api/leagues')
    if (datosApi.length <39) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div className='ItemListContainer'>
            <ItemList data={datosApi} />
            
            </div>
        )
    }
}