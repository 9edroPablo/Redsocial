import './header.css';
import { GlobalField } from '../../ui/input/input';
import { CustomLink } from '../../ui/link/customLink';
import logo from "../../../assets/logo.png";
import { FaCog } from 'react-icons/fa';
export function Header() {
    return (
        <header id="header">
            <div className="container d-flex-beetween">
                <div className="d-flex-beetween">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="global-search">
                        <GlobalField placeholder="Buscar" label={false}></GlobalField>
                    </div>
                    <nav className="global-menu">
                        <CustomLink key="home" valueStr="Inicio" />
                        <CustomLink key="groups" valueStr="Grupos" />
                        <CustomLink key="articles" valueStr="Articulos" />
                        <CustomLink key="shared" valueStr="Comunicados" />
                    </nav>
                </div>
                <div className="">
                    <nav>
                        <CustomLink key="profile" valueStr="Perfil" />
                        <CustomLink key="settings" icon={<FaCog />}  />
                    </nav>
                </div>
            </div>
        </header>
    );        
}