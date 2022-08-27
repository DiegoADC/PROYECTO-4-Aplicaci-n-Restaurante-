import { ReserveCompleteData } from "../../ReserveCompleteData/ReserveCompleteData";
import { ReserveCompleteTop } from "./ReserveCompleteTop";

export const ReserveComplete = (values) => {
  return (
    <div className="Complete-Container">
      <ReserveCompleteTop/>
      <ReserveCompleteData values={values.values}/>
    </div>
  );
};
