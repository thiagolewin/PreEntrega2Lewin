import './Item.css'
import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import UseFetch from '../../hooks/useFetch'
export default function Item ({...props}) {
    if (props.type == "players") {
        return (
            <Link to={"/category/players/" + props.id} className='link'>
                <div className= {"item " + props.type}>
                <h3>{props.name}</h3>
                <h4>{props.position}</h4>
                <div className='stats'>
                    <h5>{props.pace} PAC</h5>
                    <h5>{props.dribbling} DRI</h5>
                    <h5>{props.shooting} SHO</h5>
                    <h5>{props.defending} DEF</h5>
                    <h5>{props.passing} PAS</h5>
                    <h5>{props.physicality} PHY</h5>
                </div>
            </div>
            </Link>
            
        )
    } else if (props.type == "teams") {
        return(
            <div className= {"item " + props.type}>
            <h3>{props.name}</h3>
            </div>
        )
    } else if (props.type == "leagues" && props.id != 0) {
        return(
            <div className= {"item " + props.type}>
            <h3>{props.name}</h3>
            </div>
        )
    }
    
}