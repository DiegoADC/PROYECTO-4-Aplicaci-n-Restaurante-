import { useState } from 'react';
import { validateSubmit } from '../../../../helpers/search';
import { validateFormCode } from '../../../../helpers/validateInputs'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import './SearchReserve.css'

export const SearchReserve = ({setValues, setLoad, setPage}) => {
  const [code, setCode] = useState("");
  const [codeValidate, setCodeValidate] = useState(null);
  const [error, setError] = useState({
    codeError: false,
    dataError: false
  });

  return (
    <div className='SearchReserve'>
      <div className='SearchReserve-title'>Buscar Reservación</div>
      <form onSubmit={ (e) => validateSubmit(e, codeValidate, code, setValues, setLoad, setPage, setError, error) }>
        <div className='container-input-code'>
          <input type="text" name='Code' className={`input-code ${codeValidate == true ? "inputs-Valid-code" : "inputs-NotValid-code"}`} required="required" placeholder='Código de reservación' onBlur={(e)=> validateFormCode(e, setCode, setCodeValidate)} onKeyUp={(e)=> validateFormCode(e, setCode, setCodeValidate)}/>
          {codeValidate == true ? <FaCheckCircle className='input-icon-code input-icon-valid'/> : codeValidate == false && <FaTimesCircle className='input-icon-code input-icon-notValid'/>}
        </div>
        <input type="submit" value="Buscar"/>
      </form>
      {error.codeError == true && 
      <div className="Container-submit-error">
         El código debe de ser de 17 a 25 dígitos.
      </div>}
      {error.dataError == true && 
      <div className="Container-submit-error">
         No se ha encontrado ninguna reservación con el código.
      </div>}
    </div>
  );
};
