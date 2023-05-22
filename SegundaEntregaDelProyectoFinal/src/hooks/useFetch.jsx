import { useState, useEffect } from "react";
export default function UseFetch(url,header,conditions = []) {
    const [players,setPlayers] = useState([])

    useEffect(()=> {
        async function leerDatos() {
            let peticion = await fetch(url,header)
            peticion = await peticion.json()
            peticion = peticion.items
            setPlayers(peticion)
        }
        setTimeout(leerDatos,1000)
    },conditions)
    return players
}