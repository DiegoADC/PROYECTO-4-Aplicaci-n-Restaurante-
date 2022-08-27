import './BurguerMenu.css';

export const BurguerMenu = ({clicked, NavClick, page}) => {
  return (
    <div className={`Burguer-container ${clicked ? 'Burguer-active': ''}`}>
        <div className="Burguer-menu">
                <a className={`Burguer-list-item ${page == 'Home' ? 'list-item-active' : ''}`} onClick={ () => NavClick('Home') }>Inicio</a>
                <a className={`Burguer-list-item ${page == 'Reserve' ? 'list-item-active' : ''}`} onClick={ () => NavClick('Reserve') }>Reservar</a>
                <a className={`Burguer-list-item ${page == 'Menu' ? 'list-item-active' : ''}`} onClick={ () => NavClick('Menu') }>Menú</a>
        </div>
    </div>
  );
};
