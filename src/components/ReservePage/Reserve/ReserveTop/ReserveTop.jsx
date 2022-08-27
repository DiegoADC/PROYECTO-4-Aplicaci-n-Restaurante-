import './ReserveTop.css';

export const ReserveTop = ({page}) => {
  return (
    <div className="ReserveTop">
        <div className={`ReseveTop-item ${page == "reserveSearch" ? "ReserveTop-active": ""}`}>1. BUSCAR MESA</div>
        <div className={`ReseveTop-item ${page == "reserveData" ? "ReserveTop-active": ""}`}>2. TUS DATOS</div>
    </div>
  );
};
