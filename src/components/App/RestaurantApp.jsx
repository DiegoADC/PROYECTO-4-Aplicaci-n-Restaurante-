import { useState } from 'react';
import { NavBar, HomePage, Footer, MenuPage, ReservePage } from '../index';


export const RestaurantApp = () => {
  
  const [page, setPage] = useState('Home');
  const NavClick = (e)=> {
    setPage(e);
  };
  
  return (
    <>
        <NavBar NavClick={NavClick} page={page}/>
        {page == 'Home' &&<HomePage/>}
        {page == 'Reserve' &&<ReservePage/> }
        {page == 'Menu' &&<MenuPage/>}
        <Footer/>
    </>
  );
};
