import { CalcelReserve, findReserve } from "../firebase/firebaseSearch";

export const handleInputChange = (e, values, setValues) =>{
    const {name, value} = e.target;
    return setValues({...values, [name]: value});
};

export const handleDate = (valueDate, values, setValues)=>{
    const stringDate = `${(valueDate.getMonth() +1)}/${valueDate.getDate()}/${valueDate.getFullYear()}`;
    return setValues({...values, Date: stringDate});
};



export const handleSubmit = (values, setPage, setCarge, setNotFound) => {
    return setCarge(true), setNotFound(false), findReserve(values, setNotFound, setPage, setCarge);
};

export const handleSubmitCancel = (e, id, setLoad, setPage) => {
    return e.preventDefault(), setLoad(true), CalcelReserve(id, setLoad, setPage);
};


export const stopReserve = (listReserve, setNotFound, setPage, setCarge) =>{
    if (listReserve.length > 4 ){
       return setNotFound(true), setCarge(false);
    }else {
      return setPage('reserveData'), setCarge(false);
    };
};
  
