import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="div-container">
            <div className="div-container-form">
                
                <form className="div-container-login" action="">
                   
                    <img src="/img/Logo.jpeg" alt="" className="logo-login" />
                    
                    <div className="txt_field">
                        <input type="email" id="correoLogin" required />
                        <span></span>
                        <label>Correo electronico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passwordLogin" required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <input type="submit" value="Iniciar sesión" />
                    <div className="signup_link">
                        ¿No eres miembro? <Link to="/Registro">Registrate</Link>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Body;