import { handleInputChange, handleSubmit } from '../helpers/reserveSearch';

const expressions = {
	usuario: /^[a-zA-Z0-9]{18,25}$/,
	nameAndLastname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/
};


const validateField = (e, expression, Name, notValid, setNotValid, values, setValues) =>{
	if(!expression.test(e.target.value)){
		setNotValid({ ...notValid, [Name]: false });
	} else{
		setNotValid({ ...notValid, [Name]: true });
		handleInputChange(e, values, setValues);
	};
};

export const validateFormUserData = (e, setNotValid, notValid, values, setValues)=>{
	switch (e.target.name){
		case "Name" :
			validateField(e, expressions.nameAndLastname, "Name", notValid, setNotValid, values, setValues);
		break;
	
		case "LastName" :
			validateField(e, expressions.nameAndLastname, "LastName", notValid, setNotValid, values, setValues);
		break;

		case "Email" :
			validateField(e, expressions.email, "Email", notValid, setNotValid, values, setValues);
		break;

		case "Phone" :
			validateField(e, expressions.phone, "Phone", notValid, setNotValid, values, setValues);
		break;
	};
};

export const validateFormCode = ( e, setCode, setCodeValidate )=>{
	if(!expressions.usuario.test(e.target.value)){
		setCodeValidate(false);
	} else{
		setCodeValidate(true);
		setCode(e.target.value);
	};
};

export const validateFormSearch = (e, values, setPage, setCarge, setNotFound, validate, setFormValidate) => {
	e.preventDefault();
	
	if ( validate.date == null || validate.people == null || validate.time == null) {		
		setFormValidate(true);
		return setTimeout(() => { setFormValidate(false) }, 7000);
	};
	
	return handleSubmit(values, setPage, setCarge, setNotFound);
};

