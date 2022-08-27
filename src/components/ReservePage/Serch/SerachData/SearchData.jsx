import { handleSubmitCancel } from '../../../../helpers/reserveSearch';
import { ReserveCompleteData } from '../../ReserveCompleteData/ReserveCompleteData';
import './SearchData.css';


export const SearchData = ({values, setLoad, setPage}) => {
  return (
    <div className='SearchData'>
        <ReserveCompleteData values={values}/>
        <form onSubmit={ (e) => handleSubmitCancel(e, values.id, setLoad, setPage) }>
          <input type="submit" value="Cancelar Reservación"/>
        </form>
    </div>
  );
};
