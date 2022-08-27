import { useState } from "react";
import { MenuBar } from "./MenuBar";
import { MenuTasting } from "./MenuTasting";
import './MenuPage.css';

export const MenuPage = () => {
  const [menu, setMenu] = useState('Bar');
  const NavClick = (e)=> {
    setMenu(e);
  };
  
  return (  
    <div className="MenuPage">
      <div className="MenuPage-Container">
        <div className="MenuPage-title">Menú</div>
        <div className="MenuPage-NavBar">
          <div onClick={() => NavClick('Bar')} className={`${ menu == 'Bar' ? 'MenuPage-NavBar-active' : ''}`}>Barra de Cocina</div>
          <div onClick={() => NavClick('Tasting')} className={`${ menu == 'Tasting' ? 'MenuPage-NavBar-active' : ''}`}>Menú Degustación</div>
        </div>
        <div className="MenuPage-season">
          <div>MENÚ VERANO</div>
          <div>- AGOSTO 2022 -</div>
        </div>
        <div className="MenuPage-Menu">
          {menu == 'Tasting' && <MenuTasting/>}
          {menu == 'Bar' && <MenuBar/>}
        </div>
      </div>
    </div>
  );
};
