import './RotationRow.css';

function RotationRow(props) {

  const arr = props.option.selections;
  return (
    <div className="row-container">
      <button className="row-container__button" onClick={props.remove_callback}>-</button>
      <select className="selector" value={props.option.selected} onChange={e => props.selection_callback(e.target.value)}>
        {arr.map((option) => (
          <option key={option.id} value={option.id}>{option.option}</option>
        ))}
      </select>
      <button className="row-container__buttonGear" onClick={props.show_callback} ></button>
    </div>
  );
}

export default RotationRow;