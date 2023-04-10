import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

function BodyBebidasFrias() {
  stompClient.suscibe("/response/product-list", function(message){
    messageData = JSON.parse(message.body);
    if(messageData.success){
        localStorage.setItem("product", JSON.parse(messageData.data));
    } else {
        alert("No se pudo visualizar los productos")
    }
});

  const connect = () => {
    let socket = new SocketJS(URI);
    stompClient = over(sock);
    stompClient.connect({}, onConnect, onError);
  };

  const onConnect = () => {
    console.log("[INFO] - stomp conected");
  };

  const onError = (e) => {
    console.log(e);
  };
    /*const listaFrio = [
        {id: 1, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 2, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 3, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 4, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 5, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 6,producto: "Cafe mo0ca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]*/
    return (
        <div className="div-body-bebidas">
            <div className="div-container-bebidas">
              {listaFrio.map((listaFrio) => {
                if(messageData.category == "Bebidas frias"){
                return (
                  
                <CardProducto
                key={listaFrio.id}
                producto={listaFrio.producto}
                img={listaFrio.img}
                precio={listaFrio.precio}
                />
                );}
              })}
              
            </div>
        </div>
    )
}
export default BodyBebidasFrias;