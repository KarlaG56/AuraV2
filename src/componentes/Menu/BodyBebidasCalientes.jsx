import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

function BodyBebidasCalientes() {
    const listaCaliente = [
        {id: 1, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 2,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"200"},
        {id: 3,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"300"},
        {id: 4,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"400"},
        {id: 5,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"500"},
        {id: 6,producto: "Cafe moOca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]
    return (
        <div className="div-body-bebidas">

            <div className="div-container-bebidas">
              {listaCaliente.map((listaCaliente) => {
              return (
  
                <CardProducto 
                key={listaCaliente.id}
                producto={listaCaliente.producto}
                img={listaCaliente.img}
                precio={listaCaliente.precio}
                />

                );
              })}
            </div>

        </div>
    )
}
export default BodyBebidasCalientes;