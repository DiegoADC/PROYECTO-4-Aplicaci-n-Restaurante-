import { FaRegEnvelope, FaPhoneAlt, FaStar } from "react-icons/fa";
import './HomePage.css';


export const HomePage = () => {
  return (
    <>
    <div className='SetionMenu'>
      <div className='SectionMenu-container'>
        <div className='SectionMenu-img-movile'>
          <div></div>
        </div>
        
        <div className='SectionMenu-text'>
          <div className='SectionMenu-text-container'>
            <div>La Maison du Bon</div>
            <p>Cuidamos con pasión y detalle cada platillo que elaboramos para ti</p>
          </div>
          <div className='SectionMenu-text-img'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='SectionMenu-img'>
          <div></div>
        </div>
      </div>
    </div>
    <div className='SectionMenu-Bar'>
        <div className='SectionMenu-itemB'></div>
        <div className='SectionMenu-itemC'></div>
        <div className='SectionMenu-itemB'></div>
        <div className='SectionMenu-itemC'></div>
        <div className='SectionMenu-itemB'></div>
    </div>
    <div className='SectionInfo'>
        <div className='SectionInfo-Container'>
            <div className='SectionInfo-item'>
                <div className='SectionInfo-item-img item-img-1'></div>
                <div className='SectionInfo-item-text'><span>Reconocimiento</span><p>Tenemos grandes reconocimientos de los mejores críticos y varios premios</p></div>
            </div>
            <div className='SectionInfo-item'>
                <div className='SectionInfo-item-img item-img-2'></div>
                <div className='SectionInfo-item-text'><span>Calidad</span><p>Hacemos nuestros platillos con la mejor calidad</p></div>
            </div>
            <div className='SectionInfo-item'>
                <div className='SectionInfo-item-img item-img-3'></div>
                <div className='SectionInfo-item-text'><span>Productos</span><p>La selección en nuestros productos se elige con la mejor calidad</p></div>
            </div>
            <div className='SectionInfo-item'>
                <div className='SectionInfo-item-img item-img-4'></div>
                <div className='SectionInfo-item-text'><span>Eventos</span><p>Por celebración de 1er mes de apertura, tenemos nuestros precios a un 20% de descuento</p></div>
            </div>
        </div>
    </div>
    <div className='SectionAbout'>
        <div className='SectionAbout-Container'>
          <div className='SectionAbout-img'>
            <div></div>
          </div>
          <div className='SectionAbout-container-text'>
            <div className='SectionAbout-more'>Sobre Nosotros</div>
            <div className='SectionAbout-info-text'>
              <div className='SectionAbout-info'>Cocina Especializada en cortes, es un restaurante que reúne a una selección de cocinas dentro de un espacio diseñado para brindar una experiencia agradable a todos los sentidos.</div>
              <div className='SectionAbout-info-items'>
                <div className='SectionAbout-info-item'><div className='info-item-year info-item-top'>8/2021</div><div className='info-item-name'>Creación</div></div>
                <div className='SectionAbout-info-item'><div className='info-item-ubication info-item-top' >Del Refugio 40, Barrio del Atache, 40250 Taxco, Gro.</div><div className='info-item-name'>Ubicación</div></div>
                <div className='SectionAbout-info-item'><div className='info-item-rating info-item-top'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><div className='info-item-name'>Rating</div></div>
                <div className='SectionAbout-info-item'>
                  <div className='info-item-contact info-item-top'> 
                    <div><FaRegEnvelope id="Icon-Mail"/><p>MaisonContact@gmail.com</p></div>
                    <div><FaPhoneAlt id="Icon-phone"/><p>+52 55 8725 2956</p></div>
                  </div> 
                  <div className='info-item-name'>Contacto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};