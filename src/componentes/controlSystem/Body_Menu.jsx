function Body_Menu() {
    return (
        <div className="div-container-Menu">
            <div className="div-container-form-Menu">
                <form action="" className="form-Menu">
                    <h3 className="title-Menu">Menú</h3>
                    <div className="div-form-data-menu">
                        <label>Nombre del platillo</label>
                        <input type="text" id="platillo" className="input-Menu" required />
                    </div>

                    <div className="div-form-data">
                        <label>Precio</label>
                        <input type="text" id="precioPlatillo" className="input-Menu" required />
                    </div>

                    <div className="div-form-data">
                        <label>Imagen</label>
                        <input type="file" id="imgPlatillo" className="input-Menu"required />
                    </div>


                    <div className="button-contaner-menu">
                        <button className="button-menu">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Body_Menu;