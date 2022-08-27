import './ReserveTop.css';

export const ReserveTop = ({clicked, handleClick}) => {

  return (
    <div className='ReservePage-Card-Top'>
      <div className={`ReservePage-Reserve  ${clicked == 'Reserve' ? 'Reserve-Active': ''}`} onClick={ () => handleClick('Reserve') }>Reservar</div>
      <div className={`ReservePage-Serch ${clicked == 'SerchReserve' ? 'Serch-Active': ''}`} onClick={ () => handleClick('SerchReserve') }>Buscar Reservación</div>
    </div>
  );
};
