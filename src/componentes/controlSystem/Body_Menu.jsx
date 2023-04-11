

function Body_Menu() {
    return (
        <div className="div-container-Menu">
            <div className="div-container-form-status">
                <form action="" className="div-form-status">
                    <h3 className="title-status">Estatus</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar pelicula</label>
                        <select className="select-status" size="10" required>
                        </select>
                    </div>

                    <div className="div-container-data-status">
                        <div className="buttons-status">
                            <button className="button-status-active">Activo</button>
                            <button className="button-status-inactive">Agotado</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="div-container-form-Menu">
                <form action="" className="form-Menu">
                    <h3 className="title-Menu">Menú</h3>
                    <div className="div-form-data-menu">
                        <label>Nombre del pelicula</label>
                        <input type="text" id="platillo-Menu" className="input-Menu" required />
                    </div>

                    <div className="div-form-data">
                        <label>Precio</label>
                        <input type="text" id="precioPlatillo" className="input-Menu-precio" required />
                    </div>

                    <div className="div-form-data">
                        <label>Imagen</label>
                        <input type="file" id="imgPlatillo" className="input-Menu" required />
                    </div>

                    <div className="button-contaner-menu">
                        <button className="button-menu">Registrar</button>
                    </div>
                </form>
            </div>

            <div className="div-container-form-delete">
                <form action="" className="div-form-delete">
                    <h3 className="title-delete">Eliminar</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar pelicula</label>
                        <select className="select-status" size="10" required>
                        </select>
                    </div>

                    <div className="div-container-data-delete">
                        <button className="button-status-delete">Eliminar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Body_Menu;