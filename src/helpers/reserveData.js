import { upReserveDataUser } from "../firebase/firebaseSearch";



export const validateSubmit = (e, notValid, setCarge, values, setPage, setValues, setForm)=>{
    e.preventDefault();
    if( notValid.Name && notValid.LastName && notValid.Email && notValid.Phone ){
      handleSubmit(setCarge, values, setPage, setValues);
      setForm(false);
    }else{
      setForm(true);
    };
};



const handleSubmit = (setCarge, values, setPage, setValues) => {
    return setCarge(true), upReserveDataUser(values, setCarge, setPage, setValues);
};


export const dateTransform = (stringDate)=> {
    const monthEsp = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const weekdaysEsp = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const newDate = new Date(stringDate);
    const date = `${weekdaysEsp[newDate.getDay()]}, ${newDate.getDate()} de ${monthEsp[newDate.getMonth()]} ${newDate.getUTCFullYear()}`;
    return date;
};

export const uploadDataReservation = (errorValidate, UserReserve, setCarge, setPage, setValues) =>{
    let arr = {
        id: UserReserve[0][0]
    };

    for (let i = 0; i < Object.keys(UserReserve[0][1]).length; i++) {
        const [key, value] = Object.entries(UserReserve[0][1])[i];
        arr[key] = value;
    };

    if ( errorValidate == true ){
        return setPage('reserveComplete'), setCarge(false), setValues(arr);
    }else {
        setCarge(false)
        setTimeout(() => {
            setPage('reserveSearch')
        }, 10000);
        return
    };
};
