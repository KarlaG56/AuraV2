import CardProducto from "./CardProducto";
import "../../assets/styles/Body_Bebidas.css";

const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

function BodyExtras() {
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
    /*const listaProductosExtras = [
       {id: 1, producto: "Cafe colombiano", img: "/img/tab-item-01.jpg", precio:"100"},
        {id: 2,producto: "Cafe americano", img: "/img/tab-item-01.jpg", precio:"200"},
        {id: 3,producto: "Cafe americano", img:"/img/tab-item-01.jpg", precio:"300"},
        {id: 4,producto: "Cafe con leche", img: "/img/tab-item-01.jpg", precio:"400"},
        {id: 5,producto: "Cafe con moca2", img: "/img/tab-item-01.jpg", precio:"500"},
        {id: 6,producto: "Cafe mo0ca", img:"/img/tab-item-01.jpg", precio:"500"}
      ]*/
    return (
        <div className="div-body-bebidas">           
            <div className="div-container-bebidas">
            {messageData.map((messageData) => {
              if(messageData.category == "Extra"){
              return <CardProducto 
              key={messageData.id} 
              img={messageData.img} 
              producto={messageData.product} 
              precio={messageData.price} />;
            }})}
          
            </div>
        
        </div>
    )
}
export default BodyExtras;