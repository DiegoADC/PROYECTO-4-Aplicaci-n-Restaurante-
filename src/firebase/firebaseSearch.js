import {collection, addDoc, query, where, getDocs, getDoc, doc, deleteDoc} from 'firebase/firestore';
import { db } from './fireBase';
import { stopReserve } from '../helpers/reserveSearch';
import { uploadDataReservation } from '../helpers/reserveData';

const dbRef = collection(db, 'Reserve');

export const findReserve = async ( { Date, Time}, setNotFound, setPage, setCarge ) => {
  let listReserve = [];
  const q = query(dbRef, where("Date", "==", Date), where("Time", "==", Time));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    listReserve.push({[doc.id]: doc.data()});
  });
  stopReserve(listReserve, setNotFound, setPage, setCarge);
};

export const upReserveDataUser = async(values, setCarge, setPage, setValues)=>{
  const DataValues = [{...values}];

  let upValues = {};
  DataValues.forEach( (objet) => upValues = objet);

  await addDoc(dbRef, upValues);
  return validateReservation(values, setCarge, setPage, setValues);
};

const validateReservation = async ({...values}, setCarge, setPage, setValues) => {
  let errorValidate = true;

  
  // const arr = Object.keys(values).map((key) => {return [(key)]});
  // let stringValues = "";
  // for (let i = 0; i < arr.length; i++) {
  //   let point = true;
  //   if(i == arr.length - 1){
  //       point = false;
  //   };
  //   stringValues += `where("${arr[i]}", "==", values.${arr[i]})${point == true ? ", ": " "}`;
  // };

  const q = query(dbRef, where("People", "==", values.People), where("Date", "==", values.Date), where("Time", "==", values.Time), where("Name", "==", values.Name), where("LastName", "==", values.LastName), where("Email", "==", values.Email), where("Phone", "==", values.Phone)  );
  let UserReserve = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    UserReserve.push({[doc.id]: doc.data()});
  });

  if(UserReserve.length !== 1){
    errorValidate = false;
  };
  
  UserReserve = Object.entries(UserReserve[0]);

  return uploadDataReservation(errorValidate, UserReserve, setCarge, setPage, setValues);
};

export const searchReservation = async(code, setValues, setLoad, setPage, setError, error)=>{
  const docRef = doc(db, "Reserve", code);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  setLoad(false);
  if (docSnap.exists()) {
    docData.id = code;
    return setValues(docData), setPage("SearchData");
  } else {
    setError({ ...error, dataError: true });
  };
};

export const CalcelReserve = async(id, setLoad, setPage)=>{
  await deleteDoc(doc(db, "Reserve", id));
  return setLoad(false), setPage('SearchCancel');
};