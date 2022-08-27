import { dateTransform } from '../../../helpers/reserveData';
import './ReserveComplete.css';


export const ReserveCompleteData = ({values}) => {
  return (
    <div className='ReserveComplete'>
      <div className='ReserveComplete-data'>
        <div className='ReserveComplete-data-user'>
          <div>TUS DATOS</div>
          <span>NOBRE: </span>
          <div>{`${values.Name.toUpperCase()} ${values.LastName.toUpperCase()}`}</div>
          <span>E-mail: </span>
          <div>{values.Email}</div>
          <span>Télefono: </span>
          <div>{values.Phone}</div>
          <div>LA MAISON DU BON</div>
        </div>
        <div className='ReserveComplete-data-reserve'>
          <div>INFORMACION DE LA RESERVACION</div>
          <span>FECHA:</span>
          <div>{dateTransform(values.Date).toUpperCase()}</div>
          <span>HORA:</span>
          <div>{values.Time}</div>
          <span>PERSONAS:</span>
          <div>{`${values.People} ${values.People === 1 ? "PERSONA" : "PERSONAS"}`}</div>
          <span>TU CODIGO DE RESERVACION:</span>
          <div>{values.id}</div>
        </div>
      </div>
    </div>
  );
};
