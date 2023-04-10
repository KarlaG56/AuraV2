import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

function BodyBebidasCalientes() {
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

    /*const listaCaliente = [
        {id: 1, producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 2,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"200"},
        {id: 3,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"300"},
        {id: 4,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"400"},
        {id: 5,producto: "Cafe moca", img:"/img/tab-item-01.jpg", precio:"500"},
        {id: 6,producto: "Cafe moOca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]*/
      
    return (
        <div className="div-body-bebidas">

            <div className="div-container-bebidas">
              {messageData.map((messageData) => {
                if(messageData.category == "Bebidas calientes"){
              return (
              
                <CardProducto 
                key={messageData.id}
                producto={messageData.name}
                img={messageData.img}
                precio={messageData.price}
                />
                );}
              })}
            </div>

        </div>
    )
            }
            export default BodyBebidasCalientes;