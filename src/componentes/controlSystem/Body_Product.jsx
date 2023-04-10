const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

handleClick = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let precio = event.target.precio.value;
    let img = event.target.img.value;
    let cantidad = event.target.cantidad.value;
    let descripcion = event.target.descripcion.value;
  
      signUpRequest({
          "price": precio,
          "img": img,
          "name": name,
          "category": categoria,
          "amount": cantidad,
          "description": descripcion,
          "sessionId": localStorage.getItem("sessionId")
      });
        stompClient.sendEmail("/request/product-create",JSON.stringify(signUpRequest) );
  };

  handleAdd = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let cantidad = event.target.cantidad.value;
  
      fillOutRequest({
          "name": name,
          "amount": cantidad,
          "sessionId": localStorage.getItem("sessionId")
      });
        stompClient.sendEmail("/request/product-fill-out",JSON.stringify(fillOutRequest) );
  };

  handleDelete=(e)=>{
    e.preventDefault();
    let eliminar = e.target.eliminar.value;
  
   if(password == confirm){
      deleteRequest({
          "productId": eliminar,
          "sessionId": localStorage.getItem("sessionId")
      });
        stompClient.sendEmail("/request/product-delete",JSON.stringify(deleteRequest) );
   }
  };

function Body_Product() {
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
    return (
        <div className="div-container-Product">
            <div className="div-container-form-status">
                <form action="" className="div-form-status">
                    <h3 className="title-status">Añadir cantidad</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar producto</label>
                        <select className="select-status" size="5" id="sctStatusProduct" required name="name">
                        </select>
                    </div>

                    <div className="div-container-data-status" >
                        <label>Cantidad</label>
                        <input type="number" id="añadCantStatus" className="input-Product-number" required name="cantidad"/>
                    </div>

                    <div className="div-container-data-cant">
                        <button className="button-cant" onClick={handleAdd}>Añadir</button>
                    </div>
                </form>
            </div>



            <div className="div-container-form-Product">
                <form action="" className="form-Product">
                    <h3 className="title-Product">Producto</h3>
                    <div className="div-form-data-Product">
                        <label>Nombre del producto</label>
                        <input type="text" id="nameProduct" className="input-Product" required name="name"/>
                    </div>

                    <div className="div-form-data-numbers">
                        <div>
                            <label>Precio</label>
                            <input type="text" id="precioProduct" className="input-Product-number" required name="tipo"/>
                        </div>

                        <div>
                            <label>Cantidad</label>
                            <input type="number" id="cantProduct" className="input-Product-number" required name="cantidad"/>
                        </div>
                    </div>

                    <div className="div-form-data-descrip">
                        <label>Descripción</label>
                        <input type="text" id="dctProduct" className="input-Product-descrip" required name="descripcion"/>
                    </div>

                    <div className="div-form-data-Product">
                        <label>Imagen</label>
                        <input type="file" id="imgProduct" className="input-Product" required name="img"/>
                    </div>

                    <div className="button-contaner-Product">
                        <button className="button-product" onClick={handleClick}>Registrar</button>
                    </div>
                </form>
            </div>


            <div className="div-container-form-delete">
                <form action="" className="div-form-delete">
                    <h3 className="title-delete">Eliminar</h3>
                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar servicio</label>
                        <select className="select-status" size="10" id="selectDeltProduct" required name = "eliminar">
                        </select>
                    </div>

                    <div className="div-container-data-delete">
                        <button className="button-status-delete" onClick={handleDelete}>Eliminar</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Body_Product;