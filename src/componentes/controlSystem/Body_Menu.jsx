const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

handleActivo=(e)=>{
    e.preventDefault();
    if(password == confirm){
        statusRequest({
            "status": "Activo",
            "sessionId": localStorage.getItem("sessionId")
        });
          stompClient.sendEmail("/request/menu-change-status",JSON.stringify(statusRequest) );
        
     }
}

handleAgotado=(e)=>{
    e.preventDefault();
        statusRequest({
            "status": "Agotado",
            "sessionId": localStorage.getItem("sessionId")
        });
          stompClient.sendEmail("/request/menu-change-status",JSON.stringify(statusRequest) );
}

handleDelete=(e)=>{
    e.preventDefault();
    let eliminar = e.target.eliminar.value;
  
   if(password == confirm){
      deleteRequest({
          "productId": eliminar,
          "sessionId": localStorage.getItem("sessionId")
      });
        stompClient.sendEmail("/request/menu-delete",JSON.stringify(deleteRequest) );
   }
  };


handleClick = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let precio = event.target.precio.value;
    let img = event.target.img.value;
    let categoria = event.target.categoria.value;
  
      signUpRequest({
          "price": precio,
          "img": img,
          "name": name,
          "category": categoria,
          "status": "Activo",
          "sessionId": localStorage.getItem("sessionId")
      });
        stompClient.sendEmail("/request/menu-create",JSON.stringify(signUpRequest) );
  };

function Body_Menu() {
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
        <div className="div-container-Menu">
            <div className="div-container-form-status">
                <form action="" className="div-form-status">
                    <h3 className="title-status">Estatus</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar platillo</label>
                        <select className="select-status" size="10" id="sctStatusMenu" required name="status">
                        </select>
                    </div>

                    <div className="div-container-data-status">
                        <div className="buttons-status">
                            <button className="button-status-active" onClick={handleActivo}>Activo</button>
                            <button className="button-status-inactive" onClick={handleAgotado}>Agotado</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="div-container-form-Menu">
                <form action="" className="form-Menu">
                    <h3 className="title-Menu">Menú</h3>
                    <div className="div-form-data-menu">
                        <label>Nombre del platillo</label>
                        <input type="text" id="nameMPlatillo" className="input-Menu" required name="name"/>
                    </div>

                    <div className="div-form-data-select">
                        <div>
                            <label className="label-menu" >Seleccionar categoria</label>
                            <select className="select-menu" name="categoria">
                                <option value="BFria">Elige</option>
                                <option value="BFria">Bebidas frias</option>
                                <option value="BCalient">Bebidas calientes</option>
                                <option value="Extra">Extra</option>
                            </select>
                        </div>
                    </div>

                    <div className="div-form-data">
                        <label>Precio</label>
                        <input type="text" id="precioPlatillo" className="input-Menu-precio" required name="precio"/>
                    </div>

                    <div className="div-form-data">
                        <label>Imagen</label>
                        <input type="file" id="imgPlatillo" className="input-Menu" required name="img"/>
                    </div>

                    <div className="button-contaner-menu">
                        <button className="button-menu" onClick={handleClick}>Registrar</button>
                    </div>
                </form>
            </div>

            <div className="div-container-form-delete">
                <form action="" className="div-form-delete">
                    <h3 className="title-delete">Eliminar</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar platillo</label>
                        <select className="select-status" size="10" id="selectDeletStatus" required name="eliminar">
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

export default Body_Menu;