import { searchReservation } from "../firebase/firebaseSearch";


export const handleSubmit = (code, setValues, setLoad, setPage, setError, error) => {
    return searchReservation(code, setValues, setLoad, setPage, setError, error);
};

export const validateSubmit = (e, codeValidate, code, setValues, setLoad, setPage, setError, error)=>{
    e.preventDefault();
    setError({codeError: false, dataError: false});
    setLoad(true);
    if( codeValidate ){
        handleSubmit(code, setValues, setLoad, setPage, setError, error);
    }else{
        setLoad(false);
	    setError({ ...error, codeError: true });
    };
};

