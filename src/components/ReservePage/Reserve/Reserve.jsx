import { useState } from 'react';
import { ReserveTop, ReserveSearch, ReserveLoad, ReserveError, ReserveData, ReserveComplete } from './index';

export const Reserve = () => {
  const [carge, setCarge] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState('reserveSearch');
  const [values, setValues] = useState({});
  return (
    <div>
      {page == 'reserveSearch' ? <ReserveTop page={page}/> : page == 'reserveData' && <ReserveTop page={page}/>}
      {page == 'reserveSearch' && <ReserveSearch setCarge={setCarge} setNotFound={setNotFound} setPage={setPage} values={values} setValues={setValues}/>}
      {page == 'reserveData' && <ReserveData values={values} setValues={setValues} setCarge={setCarge} setPage={setPage}/>}
      {page == 'reserveComplete' && <ReserveComplete values={values}/>}
      {carge == true &&<ReserveLoad/>}
      {notFound == true &&<ReserveError/>}
    </div>
  );
};
