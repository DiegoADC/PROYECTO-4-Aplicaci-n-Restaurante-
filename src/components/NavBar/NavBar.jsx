import { useState } from 'react';
import { BurguerMenu, BurguerButton } from '../index';
import './NavBar.css';

export const NavBar = ({NavClick, page}) => {

  const [clicked, setClicked] = useState(false);
  const handleClick = ()=> {
    setClicked(!clicked);
  };

  return (
    <div className='Navbar'>
            <div className='Nav-left'>
                <div className='Nav-left-text'>Mora<span>.</span></div>
            </div>

            <div className='Nav-right '> 
              <BurguerMenu clicked={clicked} NavClick={NavClick} page={page}/>
              <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
    </div>
  );
};
