import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

function BodyBebidasFrias() {
    const listaFrio = [
        {id: 1, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 2, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 3, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 4, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 5, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 6,producto: "Cafe mo0ca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]
    return (
        <div className="div-body-bebidas">
            <div className="div-container-bebidas">
              {listaFrio.map((listaFrio) => {
                return (
                  
                <CardProducto
                key={listaFrio.id}
                producto={listaFrio.producto}
                img={listaFrio.img}
                precio={listaFrio.precio}
                />
                );
              })}
              
            </div>
        </div>
    )
}
export default BodyBebidasFrias;