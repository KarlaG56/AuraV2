import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

function BodyExtras() {
    const listaProductosExtras = [
       {id: 1, producto: "Cafe colombiano", img: "/img/tab-item-01.jpg", precio:"100"},
        {id: 2,producto: "Cafe americano", img: "/img/tab-item-01.jpg", precio:"200"},
        {id: 3,producto: "Cafe americano", img:"/img/tab-item-01.jpg", precio:"300"},
        {id: 4,producto: "Cafe con leche", img: "/img/tab-item-01.jpg", precio:"400"},
        {id: 5,producto: "Cafe con moca2", img: "/img/tab-item-01.jpg", precio:"500"},
        {id: 6,producto: "Cafe mo0ca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]
    return (
        <div className="div-body-bebidas">           
            <div className="div-container-bebidas">
            {listaProductosExtras.map((listaProductosExtras) => {

              return <CardProducto 
              key={listaProductosExtras.id} 
              img={listaProductosExtras.img} 
              producto={listaProductosExtras.producto} 
              precio={listaProductosExtras.precio} />;
            })}
            
            </div>
        
        </div>
    )
}
export default BodyExtras;