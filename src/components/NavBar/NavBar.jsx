import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import navbar from "./navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
    const links = [
        { title: "Categorías", url: "/categorías"},
        { title: "Marcas", url: "/marcas"},
        { title: "Sobre nosotros" , url:"/sobre nosotros"},
];

    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">
                        {<img className="imgLogo" src="imgs/logo.png" alt="Imagen logo"></img>}
                    </Link>
                    <Link to="/brands">Marcas</Link>
                    <Link to="/aboutus">Sobre nosotros</Link>
                    <NavItem to="cart"><CartWidget/></NavItem> 
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;