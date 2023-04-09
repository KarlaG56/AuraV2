import '../assets/styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="Header">
            <div className='Texto-header'>

            
            <Link to="/" id="logo">
                <div id="place-1">
                    <img src="/img/klassy-logo.png" alt="" />
                </div>
            </Link>

            <Link to="/" id="Inicio">
                <a>| Inicio |</a>
            </Link>

            <Link to="/Acerca-de-nosotros" id="Acerca-de-nosotros">
                <a>| Acerca de nosotros |</a>
            </Link>

            <Link to="/Menu" id="Menu">
                <a>| Menu |</a>
            </Link>

            <Link to="/Servicios" id="Servicios">
                <a>| Servicios |</a>
            </Link>

            <Link to="/Iniciar-sesion" id="Iniciar-sesión">
                <a>| Iniciar sesión |</a>
            </Link>
            </div>

        </div>
    );

}
export default Header;