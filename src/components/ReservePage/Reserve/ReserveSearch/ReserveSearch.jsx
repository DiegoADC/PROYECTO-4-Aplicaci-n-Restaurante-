import { useState } from 'react';
import { ReserveSearchDate } from './ReserveSearchDate';
import { handleInputChange, handleDate} from '../../../../helpers/reserveSearch';
import { validateFormSearch } from '../../../../helpers/validateInputs';
import './ReserveSearch.css';


export const ReserveSearch = ({setCarge, setNotFound, setPage, values, setValues}) => {
  const [valueDate, setValueDate] = useState(null);
  const [formValidate, setFormValidate] = useState(false);

  let validate = {
    date: valueDate,
    people: document.getElementById("People"),
    time: document.getElementById("Time")
  };
  
  return (
    <form onSubmit={(e) => validateFormSearch(e, values, setPage, setCarge, setNotFound, validate, setFormValidate)}>
      <div className="ReserveSearch">
        <select className='ReserveSearch-people' onChange={(e) => handleInputChange(e, values, setValues)} name='People' required="required" id='People'>
          <option value="none" hidden>No Personas</option>
          <option value="1" >1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          <option value="4">4 personas</option>
          <option value="5">5 personas</option>
          <option value="6">6 personas</option>
          <option value="7">7 personas</option>
          <option value="8">8 personas</option>
          <option value="9">9 personas</option>
          <option value="10">10 personas</option>
        </select>
        
        <ReserveSearchDate valueDate={valueDate} setValueDate={setValueDate} handleDate={handleDate} values={values} setValues={setValues}/>
        
        <select className='ReserveSearch-time' onChange={(e) => handleInputChange(e, values, setValues)} name='Time' id='Time'>
          <option value="none" hidden>Horario</option>
          <option value="12:00 PM">12:00 pm</option>
          <option value="12:30 PM">12:30 pm</option>
          <option value="1:00 PM">1:00 pm</option>
          <option value="1:30 PM">1:30 pm</option>
          <option value="2:00 PM">2:00 pm</option>
          <option value="2:30 PM">2:30 pm</option>
          <option value="3:00 PM">3:00 pm</option>
          <option value="3:30 PM">3:30 pm</option>
          <option value="4:00 PM">4:00 pm</option>
          <option value="4:30 PM">4:30 pm</option>
          <option value="5:00 PM">5:00 pm</option>
          <option value="5:30 PM">5:30 pm</option>
          <option value="6:00 PM">6:00 pm</option>
          <option value="6:30 PM">6:30 pm</option>
          <option value="7:00 PM">7:00 pm</option>
          <option value="7:30 PM">7:30 pm</option>
          <option value="8:00 PM">8:00 pm</option>
          <option value="8:30 PM">8:30 pm</option>
          <option value="9:00 PM">9:00 pm</option>
          <option value="9:30 PM">9:30 pm</option>
          <option value="10:00 PM">10:00 pm</option>
        </select>
        <button className='ReserveSearch-btn' type="submit">Buscar una mesa</button>
      </div>
      {formValidate == true && 
      <div className="Container-submit-error">
         Complete todos los campos del formulario.
      </div>}
    </form>
  );
};
