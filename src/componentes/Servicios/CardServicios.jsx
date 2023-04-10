import "../../assets/styles/BodyServicios.css";

function CardServicios(props) {

        return (
                <div className="card-servicios">
                        <div className="contenedor-img-servicos"><img src={props.img} className="img-card" alt="" /></div>
                        <div className="nombre-producto"><h2 className="nombre-txt">{props.nombre}</h2></div>
                        <div className="description-producto"><h2>{props.description}</h2></div>
                        <div className="precio-producto"><h2>${props.precio}</h2></div>
                </div>
        )
}
export default CardServicios;