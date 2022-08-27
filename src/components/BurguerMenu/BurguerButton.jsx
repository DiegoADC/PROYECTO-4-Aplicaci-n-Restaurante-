import './BurguerButton.css';

export const BurguerButton = ({clicked, handleClick}) => {
  return (
    <div className='Nav-hamburger' >
        <div className={`menu btn ${clicked ? 'openn': ''}`} onClick={handleClick}>
            <div className={`icon ${clicked ? 'open': ''}`}></div>
        </div>
    </div>
  );
};
