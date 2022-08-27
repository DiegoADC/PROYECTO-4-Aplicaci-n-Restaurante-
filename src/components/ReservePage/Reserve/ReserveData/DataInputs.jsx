import { useState } from 'react';
import { validateSubmit } from '../../../../helpers/reserveData';
import { validateFormUserData } from '../../../../helpers/validateInputs';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import './DataInput.css';




export const DataInputs = ({values, setValues, setCarge, setPage, setForm}) => {

  const [notValid, setNotValid] = useState({
    Name: null,
    LastName: null,
    Email: null,
    Phone: null
  });

  return (
    <form id="Reserver" className='DataInputs-Container' onSubmit={(e)=> validateSubmit(e, notValid, setCarge, values, setPage, setValues, setForm)}>
      <div>
        <input type="text" name="Name" className={`DataInputs ${notValid.Name == true ? "inputs-Valid" : "inputs-NotValid"}`}  placeholder="Nombre"  onBlur={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)} onKeyUp={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)}/>
        {notValid.Name == true ? <FaCheckCircle className='input-icon input-icon-valid'/> : notValid.Name == false && <FaTimesCircle className='input-icon input-icon-notValid'/>}
      </div>
      <div>
        <input type="text" name="LastName" className={`DataInputs ${notValid.LastName == true ? "inputs-Valid" : "inputs-NotValid"}`} placeholder="Apellido" onBlur={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)} onKeyUp={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)}/>
        {notValid.LastName == true ? <FaCheckCircle className='input-icon input-icon-valid'/> : notValid.LastName == false && <FaTimesCircle className='input-icon input-icon-notValid'/>}
      </div>
      <div>
        <input type="email" name="Email" className={`DataInputs ${notValid.Email == true ? "inputs-Valid" : "inputs-NotValid"}`} placeholder="E-mail" onBlur={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)} onKeyUp={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)}/>
        {notValid.Email == true ? <FaCheckCircle className='input-icon input-icon-valid'/> : notValid.Email == false && <FaTimesCircle className='input-icon input-icon-notValid'/>}
      </div>
      <div>
        <input type="tel" name="Phone" className={`DataInputs ${notValid.Phone == true ? "inputs-Valid" : "inputs-NotValid"}`} placeholder="Número de teléfono" onBlur={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)} onKeyUp={(e)=> validateFormUserData(e, setNotValid, notValid, values, setValues)}/>
        {notValid.Phone == true ? <FaCheckCircle className='input-icon input-icon-valid'/> : notValid.Phone == false && <FaTimesCircle className='input-icon input-icon-notValid'/>}
      </div>
    </form>
  );
};
