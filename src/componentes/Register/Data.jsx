import { Link } from "react-router-dom";

function Data() {
    return (
        <div className="container">
            <div className="div-container-register-form">

                <form className="div-container-register" action="">
                    <img src="/img/klassy-logo.png" alt="" className="logo-login" />

                    <div className="txt_field">
                        <input type="text" id="name" required />
                        <span></span>
                        <label>Nombre</label>
                    </div>
                    
                    <div className="txt_field">
                        <input type="email" id="correoRegister" required />
                        <span></span>
                        <label>Correo electronico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passRegister" required />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="confPass" required />
                        <span></span>
                        <label>Confirmar contraseña</label>
                    </div>

                    <input type="submit" value="Registars" />
                    <div className="signup_link">
                        ¿Ya eres miembro? <Link to="/">Iniciar sesion</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Data;