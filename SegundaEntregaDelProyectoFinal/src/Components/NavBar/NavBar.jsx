import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
export default function NavBar() {


    return (
        <nav>
            <img src="../src/img/todoCelulares.png" alt="" />
            <Link to="/" className='link'><h1>TodoCelulares</h1></Link>    
            <ul>
                <Link to="/category/players" className='link'>Jugadores</Link>
                <Link to="/category/teams" className='link'>Equipos</Link>
                <Link to="/category/leagues" className='link'>Ligas</Link>
            </ul>
        </nav>
    )
}