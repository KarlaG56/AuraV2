function Body_Employee() {
    return (
        <div className="div-container-Employee">
            <div className="div-container-form-Employee">
                <form action="" className="form-Employee">
                    <h3 className="title-employee">Registro de empleado</h3>
                    <div className="div-form-data">
                        <label>Nombre</label>
                        <input type="text" id="nameEmployee" className="input-employee" required />
                    </div>

                    <div className="div-form-data">
                        <label>Correo electronico</label>
                        <input type="email" id="correoEmployee" className="input-employee" required />
                    </div>

                    <div className="div-form-data">
                        <label>Contraseña</label>
                        <input type="password" id="passEmployee" className="input-employee"required />
                    </div>

                    <div className="div-form-data">
                        <label>Confirmar contraseñaa</label>
                        <input type="password" id="cpassEmployee" className="input-employee" required />
                    </div>

                    <div className="button-contaner-employee">
                        <button className="button-employee">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Body_Employee;