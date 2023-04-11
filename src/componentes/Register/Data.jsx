import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function Data() {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleFullName = (event) => { setFullName(event.target.value) }
    const handleEmail = (event) => { setEmail(event.target.value) }
    const handlePassword = (event) => { setPassword(event.target.value) }
    const handleConfirmPassword = (event) => { setConfirmPassword(event.target.value) }

    const handleSumbit = (event) =>{
        event.preventDefault();
        if(password == confirmPassword){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email,
        "password": password,
        "fullName": fullName
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://52.4.56.9:8080/user", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }else{
        alert("Error al registrarse");
    }
    }
    return (
        <div className="container">
            <div className="div-container-register-form">

                <form className="div-container-register" action="">
                    <img src="/img/Logo.jpeg" alt="" className="logo-login" />

                    <div className="txt_field">
                        <input type="text" id="name" required onChange={handleName} />
                        <span></span>
                        <label>Nombre</label>
                    </div>

                    <div className="txt_field">
                        <input type="email" id="correoRegister" required onChange={handleEmail} />
                        <span></span>
                        <label>Correo electronico</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="passRegister" required onChange={handlePassword} />
                        <span></span>
                        <label>Contraseña</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" id="confPass" required onChange={handleConfirmPassword}/>
                        <span></span>
                        <label>Confirmar contraseña</label>
                    </div>

                    <input type="submit" value="Registrarse" onSubmit={handleSumbit}/>
                    <div className="signup_link">
                        ¿Ya eres miembro? <Link to="/">Iniciar sesion</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Data;