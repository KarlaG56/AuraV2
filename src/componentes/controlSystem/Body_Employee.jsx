import SockJS from "sockjs-client";
import { over } from "stompjs";
import { Link, useNavigate, Navigate} from "react-router-dom";


const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

handleClick = (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let password = event.target.password.value;
  let confirm = event.target.confPass.value;

 if(password == confirm){
    signUpRequest({
        "fullName": name,
        "email": email,
        "password": password,
        "rol": "employee",
        "sessionId": localStorage.getItem("sessionId")
    });
    
      stompClient.sendEmail("/request/sign-up",JSON.stringify(signUpRequest) );
    
 }
};

function Body_Employee() {
    const navigate = useNavigate();

    stompClient.suscibe("/response/sign-up", function(message){
        messageData = JSON.parse(message.body);
        if(messageData.success){
            localStorage.setItem("user", JSON.parse(messageData.data));
            navigate("/Control_Sistema/Menu")
        } else {
            alert("No se pudo crear el nuevo usuario")
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
    return (
        <div className="div-container-Employee">
            <div className="div-container-form-Employee">
                <form action="" className="form-Employee">
                    <h3 className="title-employee">Registro de empleado</h3>
                    <div className="div-form-data">
                        <label>Nombre</label>
                        <input type="text" id="nameEmployee" name="name" className="input-employee" required />
                    </div>

                    <div className="div-form-data">
                        <label>Correo electronico</label>
                        <input type="email" id="correoEmployee" name="email" className="input-employee" required />
                    </div>

                    <div className="div-form-data">
                        <label>Contraseña</label>
                        <input type="password" id="passEmployee" name="password" className="input-employee"required />
                    </div>

                    <div className="div-form-data">
                        <label>Confirmar contraseña</label>
                        <input type="password" id="cpassEmployee" name="confPass" className="input-employee" required />
                    </div>

                    <div className="button-contaner-employee">
                        <button className="button-employee" onClick={handleClick}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Body_Employee;