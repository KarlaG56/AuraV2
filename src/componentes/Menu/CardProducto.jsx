import "../../assets/styles/Body_Bebidas.css";

function CardProducto(props) {

    return (
       
            <div className="card-producto-menu">
                    <div className="contenedor-img-menu"><img src={props.img} className="img-card" alt=""/></div>
                    <div className="nombre-producto-menu"><h2>{props.producto}</h2></div>
                    <div className="precio-producto-menu"><h2>${props.precio}</h2></div>
            </div>
    )
}
export default CardProducto;