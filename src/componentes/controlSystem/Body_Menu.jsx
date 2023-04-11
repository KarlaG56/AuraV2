import SockJS from "sockjs-client";
import { over } from "stompjs";
import React, { useState, useEffect } from 'react';


function Body_Menu() {
    const [listaPeliculas, setlistaPeliculas] = useState([]);

    //Pelicula

    const [Name, setName] = useState(null);
    const [Cost, setCost] = useState(null);
    const [Img, setImg] = useState(null);
    const [Sinopsis, setSinopsis] = useState(null);

    const handleChangeName = (event) => { setName(event.target.value) }
    const handleChangeCost = (event) => { setCost(event.target.value) }
    const handleChangeImg = (event) => { setImg(event.target.value) }
    const handleChangeSinopsis = (event) => { setSinopsis(event.target.value) }

    const handleSubmitMovie = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "price": Cost,
            "synopsis": Sinopsis,
            "name": Name,
            "image": Img
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.215.25.5:8080/movie", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    //Delete

    const [Delete, setDelete] = useState(null);
    const handleChangeDelete = (event) => { setDelete(event.target.value) }

    const handleSubmitDelete = (event) => {
        event.preventDefault();
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("http://44.215.25.5:8080/movie/" + Delete, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://44.215.25.5:8080/movie", requestOptions)
            .then(response => response.text())
            .then(result => { console.log(result); setlistaPeliculas(JSON.parse(result)) })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="div-container-Menu">

            <div className="div-container-form-Menu">
                <form action="" className="form-Menu" onSubmit={handleSubmitMovie}>
                    <h3 className="title-Menu">Añadir película</h3>
                    <div className="div-form-data-menu">
                        <label>Nombre del pelicula</label>
                        <input type="text" id="platillo-Menu" className="input-Menu" onChange={handleChangeName} required />
                    </div>


                    <div className="div-form-data">
                        <label>Precio</label>
                        <input type="text" id="precioPelicula" className="input-Menu-precio" onChange={handleChangeCost} required />
                    </div>

                    <div className="div-form-data-menu">
                        <label>Sinopsis</label>
                        <input type="text" id="platillo-Menu" className="input-Menu" onChange={handleChangeSinopsis} required />
                    </div>

                    <div className="div-form-data">
                        <label>Imagen</label>
                        <input type="text" id="imgPelicula" className="input-Menu" onChange={handleChangeImg} required />
                    </div>

                    <div className="button-contaner-menu">
                        <button className="button-menu">Registrar</button>
                    </div>
                </form>
            </div>

            <div className="div-container-form-delete" onSubmit={handleSubmitDelete}>
                <form action="" className="div-form-delete">
                    <h3 className="title-delete">Eliminar</h3>

                    <div className="div-container-data-status">
                        <label className="label-status">Seleccionar pelicula</label>
                        <select className="select-status" size="10" onChange={handleChangeDelete} required>
                            {listaPeliculas.map((listaPeliculas) => {
                                return (

                                    <option value={listaPeliculas.id}>{listaPeliculas.name}</option>

                                );
                            })}
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