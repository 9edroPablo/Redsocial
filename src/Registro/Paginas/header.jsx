import './Header.css';
import CuestionarioRegistro from '../Moleculas/CuestionarioRegistro';

function Header() {
  return (
    <div>
       <header>
      <h1>CampusLINK</h1>
      <nav>
        <ul className="left-options">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Grupos</a></li>
          <li><a href="#">Articulos</a></li>
          <li><a href="#">Comunicados</a></li>
        </ul>
        <ul className="right-options">
          <li><a href="#">Mi Perfil</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </nav>
      <br />
    </header>
    <CuestionarioRegistro/>
    </div>
    
  );
}

export default Header;