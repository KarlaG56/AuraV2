function Body_Product() {
    return (
        <div className="div-container-Product">
            <div className="div-container-form-status">
                <form action="" className="div-form-status">
                    <h3 className="title-status">Añadir cantidad</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar producto</label>
                        <select className="select-status" size="5" id="sctStatusProduct" required>
                        </select>
                    </div>

                    <div className="div-container-data-status" >
                        <label>Cantidad</label>
                        <input type="number" id="añadCantStatus" className="input-Product-number" required />
                    </div>

                    <div className="div-container-data-cant">
                        <button className="button-cant">Añadir</button>
                    </div>
                </form>
            </div>



            <div className="div-container-form-Product">
                <form action="" className="form-Product">
                    <h3 className="title-Product">Producto</h3>
                    <div className="div-form-data-Product">
                        <label>Nombre del producto</label>
                        <input type="text" id="nameProduct" className="input-Product" required />
                    </div>

                    <div className="div-form-data-numbers">
                        <div>
                            <label>Precio</label>
                            <input type="text" id="precioProduct" className="input-Product-number" required />
                        </div>

                        <div>
                            <label>Cantidad</label>
                            <input type="number" id="cantProduct" className="input-Product-number" required />
                        </div>
                    </div>

                    <div className="div-form-data-descrip">
                        <label>Descripción</label>
                        <input type="text" id="dctProduct" className="input-Product-descrip" required />
                    </div>

                    <div className="div-form-data-Product">
                        <label>Imagen</label>
                        <input type="file" id="imgProduct" className="input-Product" required />
                    </div>

                    <div className="button-contaner-Product">
                        <button className="button-product">Registrar</button>
                    </div>
                </form>
            </div>


            <div className="div-container-form-delete">
                <form action="" className="div-form-delete">
                    <h3 className="title-delete">Eliminar</h3>
                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar servicio</label>
                        <select className="select-status" size="10" id="selectDeltProduct" required>
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

export default Body_Product;