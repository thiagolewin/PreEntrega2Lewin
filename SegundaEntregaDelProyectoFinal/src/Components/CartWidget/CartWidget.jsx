import './CartWidget.css'
export default function CartWidget() {

    return(
            <div className="carrito">
             <img src="./src/img/carrito.png" alt=""></img>
             <div className="carrito__cantidad">
                <h3>3</h3>
             </div>
            </div>
    )
}