function Body() {
    return (

        <div className="div-conteiner-information-buy">
            <div className="div-container-buy">

                <div className="div-container-product-img">
                    <img src="/img/tab-item-01.jpg" alt="" id="imgBuyProduct" className="img-product-buy" />
                </div>

                <div className="div-container-product-data">
                    <div className="div-information">
                        <img src="/img/klassy-logo.png" alt="" className="logo-buy" />
                        <h1 id="nameBuy">Cafe oro</h1>
                        <div className="div-inf-cost-number">
                            <h4>Precio </h4>
                            <p id="precioBuy" className="txt-cost-product"></p>
                        </div>

                        <div className="div-inf-cost">
                            <p id="txtBuyProduct">This example demonstrates a shorthand property for setting all of
                                the properties for the top border in one declaration.</p>
                        </div>
                    </div>
                </div>

                <div className="div-container-form-buy">
                    <for className="form-buy">
                        <h3 className="title-buy">Registro de compra</h3>

                        <div className="div-form-data-buy-number">
                            <label>Cantidad disponible </label>
                            <p id="cantDispBuy" className="txt-buy-cant" ></p>
                        </div>

                        <div className="div-form-data-buy-number">
                            <label>Cantidad</label>
                            <input type="number" id="cantBuyProduct" className="input-buy-number" required />
                        </div>

                        <div className="div-form-data-buy-number">
                            <label>Costo total</label>
                            <p id="costBuy" className="txt-buy-cant"></p>
                        </div>

                        <div className="button-contaner-buy">
                            <button className="button-buy">Comprar</button>
                        </div>
                    </for>
                </div>
            </div>
        </div>

    )
}

export default Body;