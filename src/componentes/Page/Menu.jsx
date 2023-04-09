import Header from "../Header";
import Footer from "../Footer";
import '../../assets/styles/Menu.css';

import React, { useState } from 'react';
import BodyBebidasCalientes from '../Menu/BodyBebidasCalientes';
import BodyBebidasFrias from '../Menu/BodyBebidasFrias';
import BodyExtra from '../Menu/BodyExtras';


function Menu() {

    const [selectedBody, setSelectedBody] = useState(1);

  const handleButtonClick = (bodyNumber) => {
    setSelectedBody(bodyNumber);
  };

    return (
        <>
            <Header />
            <div className="Body-general">
                <div className='Btn-menú'>
                    <div className="Contenedor-BebidasCalientes">
                        <img src="/img/tab-icon-01.png" alt="" /><br/>
                        <button id="Btn-BebidasCalientes" onClick={() => handleButtonClick(1)}>Bebidas calientes</button>
                    </div>

                    <div className="Contenedor-BebidasFrias">
                        <img src="/img/tab-icon-02.png" alt="" /><br/>
                        <button id="Btn-BebidasFrias" onClick={() => handleButtonClick(2)}>Bebidas frias</button>
                    </div>

                    <div className="Contenedor-Extra"> 
                        <img src="/img/tab-icon-03.png" alt="" /><br/>
                        <button id="Btn-Extra" onClick={() => handleButtonClick(3)}>Extra</button>
                    </div>
                </div>

                <div className="cuerpos">

                    {selectedBody === 1 && <BodyBebidasCalientes />}
                    {selectedBody === 2 && <BodyBebidasFrias />}
                    {selectedBody === 3 && <BodyExtra />}

                </div>
            </div>
            <Footer />
            
        </>
    );
}
export default Menu;