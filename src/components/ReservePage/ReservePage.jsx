import { useState } from 'react';
import { ReserveTop, Reserve, Search } from './index';
import './ReservePage.css';

export const ReservePage = () => {
  const [clicked, setClicked] = useState('Reserve');

  const handleClick = (e)=> {
    setClicked(e);
  };
  
  return (
    <div className="ReservePage">
      <div className='ReservePage-Container-Card'>
        <ReserveTop clicked={clicked} handleClick={handleClick}/>
        <div className='ReservePage-Card-Middle'>
        {clicked == 'Reserve' &&<Reserve/>}
        {clicked == 'SerchReserve' &&<Search/>}
        </div>
      </div>
    </div>
  );
};
