import { useState } from "react";
import { FaRegCalendar, FaRegClock, FaRegUser, FaTimesCircle } from "react-icons/fa";
import { dateTransform } from "../../../../helpers/reserveData";
import { DataInputs } from "./DataInputs";
import './ReserveData.css';

export const ReserveData = ({values, setValues, setCarge, setPage}) => {

  const [form, setForm] = useState(false);

  return (
    <div className="ReserveData">
      <div className="ReserveData-Info">
        <div className="ReserveData-data">
          <div>Menu barra Cortes</div>
          <div><FaRegCalendar className="ReserveData-icon"/>{dateTransform(values.Date)}</div>
          <div><FaRegClock className="ReserveData-icon"/>{values.Time}</div>
          <div><FaRegUser className="ReserveData-icon"/>{`${values.People} ${values.People >= 2 ? "personas (Asientos en la barra)" : "persona (Asiento en la barra)"} `}</div>
        </div>
        <div className="ReserveData-text">
          <div>Qué debes saber antes de ir</div>
          <div>
            <span>Información importante para comensales</span>
            <p>Su mesa quedará reservada durante 2 horas.</p>
          </div>
          <div>
            <span>Una nota del restaurante</span>
            <p>Tolerancia: 15 minutos, pasando dicho tiempo se considerará como inasistencia.</p> 
            <p>El menú dura 2 horas, si requiere más tiempo, el servicio continuará en la terraza.</p>
          </div>
        </div>
      </div>
      <DataInputs values={values} setValues={setValues} setCarge={setCarge} setPage={setPage} setForm={setForm}/>
      <div className="ReserveData-submit">
        <input type="submit" name="Submit" id="" form="Reserver" value="Confirmar la reservación" />
        {form == true && 
        <div className="Container-submit-error">
           <FaTimesCircle className="icon-submit-error"/> <span>Error: </span>Por favor rellena el formulario correctamente.
        </div>}
      </div>
    </div>
  );
};
