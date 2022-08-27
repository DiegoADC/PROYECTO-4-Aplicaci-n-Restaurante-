import { useState } from "react";
import { ReserveLoad } from "../ReserveLoad/ReserveLoad";
import { SearchCancel } from "./SearchCancel/SearchCancel";
import { SearchReserve } from "./SearchReserve/SearchReserve";
import { SearchData } from "./SerachData/SearchData";

export const Search = () => {

  const [load, setLoad] = useState(false);
  const [page, setPage] = useState("SearchReserve");
  const [values, setValues] = useState();
  return (
    <div className="Search">
      {page == "SearchReserve" && <SearchReserve setValues={setValues} setLoad={setLoad} setPage={setPage}/>}
      {page == "SearchData" && <SearchData values={values} setLoad={setLoad} setPage={setPage}/>}
      {page == "SearchCancel" && <SearchCancel/>}
      {load == true && <ReserveLoad/>}
    </div>
  );
};