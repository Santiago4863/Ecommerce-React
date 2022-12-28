import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import navbar from "./navbar.css"

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <NavItem href="/"> Valkeem</NavItem>
                    <NavItem href="/hombre">Hombres </NavItem>
                    <NavItem href="/mujer">Mujer </NavItem>
                    <NavItem href="/niños">Niños</NavItem>
                    <NavItem><CartWidget/></NavItem> 
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;