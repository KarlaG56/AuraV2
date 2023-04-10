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
        "rol": "cliente",
        "sessionId": localStorage.getItem("sessionId")
    });
    
      stompClient.sendEmail("/request/sign-up",JSON.stringify(signUpRequest) );
    
 }
};

function Data() {
    const navigate = useNavigate();

    stompClient.suscibe("/response/sign-up", function(message){
        messageData = JSON.parse(message.body);
        if(messageData.success){
            localStorage.setItem("user", JSON.parse(messageData.data));
            navigate("/")
            /*if(messageData.data.rol == "cliente"){
                navigate("/");
            } else {
                navigate("/Control_Sistema/Menu");
            }*/
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
    <div className="container">
      <div className="div-container-register-form">
        <form className="div-container-register" action="">
          <img src="/img/klassy-logo.png" alt="" className="logo-login" />

          <div className="txt_field">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Nombre</label>
          </div>

          <div className="txt_field">
            <input type="email" id="correoRegister" name="email" required />
            <span></span>
            <label>Correo electronico</label>
          </div>

          <div className="txt_field">
            <input type="password" id="passRegister" name="password" required />
            <span></span>
            <label>Contraseña</label>
          </div>

          <div className="txt_field">
            <input type="password" id="confPass" name="confPass" required />
            <span></span>
            <label>Confirmar contraseña</label>
          </div>

          <input type="submit" value="Registars" onClick={handleClick} />
          <div className="signup_link">
            ¿Ya eres miembro? <Link to="/">Iniciar sesion</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Data;
