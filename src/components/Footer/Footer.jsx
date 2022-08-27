import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-Container'>

        <div className='Footer-Network'>

          <div className='Footer-About-Container'>
            <div className="Footer-About">
                <a href="./">Condiciones de uso</a>
                <a href="./">Aviso de privacidad</a>
                <a href="./">Métodos de pago</a>
                <a href="./">Información corporativa</a>
            </div>
          </div>

          <div className='Footer-Network-Container'>
            <div className='Network-Items-Container'>
              <a href="./"><FaFacebookSquare className="Network-Items"/></a>
              <a href="./"><FaInstagramSquare className="Network-Items"/></a>
              <a href="./"><FaTwitterSquare className="Network-Items"/></a>
            </div>
          </div>

        </div>

        <div className='Footer-Text-Container'>
          <div className='Footer-Text'>Copyright © 2022, Restaurante La Maison du Bon. Reservados todos los derechos.</div>
        </div>

      </div>
    </div>
  );
};
