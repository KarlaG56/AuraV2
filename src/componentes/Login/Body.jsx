import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

    

function Body() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleEmail = (event) => { setEmail(event.target.value) }
    const handlePassword = (event) => { setPassword(event.target.value) }

    const handleSumbit = () =>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "email": email,
          "password": password,
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://52.4.56.9:8080/user/validate", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    return (
        <div className="div-container">
            <div className="div-container-form">
                
                <form className="div-container-login" action="" onSubmit={handleSumbit}>
                   
                    <img src="/img/Logo.jpeg" alt="" className="logo-login" />
                    
                    <div className="txt_field">
                        <input type="email" id="correoLogin" required onChange={handleEmail}/>
                        <span></span>
                        <label>Correo electronico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passwordLogin" required onChange={handlePassword}/>
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