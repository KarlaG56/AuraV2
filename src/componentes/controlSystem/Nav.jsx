import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-controller">
          
            <Link to="/" className='Block' >
                <a>Cerrar sesion</a>
            </Link>

            
        </nav>
    )
}

export default Nav;