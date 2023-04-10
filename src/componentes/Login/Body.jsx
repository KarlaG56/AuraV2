import { Link, useNavigate, Navigate} from "react-router-dom";

const URI = "ws://54.146.85.160:8080/cafe"; //si no funciona cambiar a http
var stompClient = null;

handleClick = (event) => {
  event.preventDefault();
  let email = event.target.email.value;
  let password = event.target.password.value;
  let confirm = event.target.confPass.value;

 if(password == confirm){
    logInResponse({
        "email": email,
        "password": password,
        "sessionId": localStorage.getItem("sessionId")
    });
    
      stompClient.sendEmail("/response/log-in",JSON.stringify(logInResponse) );
 }
};

function Body() {
    const navigate = useNavigate();

    stompClient.suscibe("/response/log-in", function(message){
        messageData = JSON.parse(message.body);
        if(messageData.success){
            localStorage.setItem("user", JSON.parse(messageData.data));
            if(messageData.data.rol == "cliente"){
                navigate("/");
            } else {
                navigate("/Control_Sistema/Menu");
            }
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
        <div className="div-container">
            <div className="div-container-form">
                
                <form className="div-container-login" action="">
                <img src="/img/klassy-logo.png" alt="" className="logo-login" />
                    <div className="txt_field">
                        <input type="email" id="correoLogin" required name="email"/>
                        <span></span>
                        <label>Correo electronico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passwordLogin" required name="pass"/>
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <input type="submit" value="Iniciar sesión" onClick={handleClick}/>
                    <div className="signup_link">
                        ¿No eres miembro? <Link to="/Registro">Registrate</Link>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Body;