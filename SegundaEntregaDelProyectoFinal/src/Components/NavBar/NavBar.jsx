import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
export default function NavBar() {


    return (
        <nav>
            <img src="/src/img/TodoFutbol.png" alt="" />
            <Link to="/" className='link'><h1>TodoFutbol</h1></Link>    
            <ul>
                <Link to="/category/players" className='link'>Jugadores</Link>
                <Link to="/category/teams" className='link'>Equipos</Link>
                <Link to="/category/leagues" className='link'>Ligas</Link>
                <CartWidget></CartWidget>
            </ul>
        </nav>
    )
}