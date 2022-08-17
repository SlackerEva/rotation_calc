import './BonusGrid.css';
import {bonusArr} from '../../utils/SelectorsArr.jsx';

//у бонусов не выставлены границы значений, я не знаю их все, может быть 200 было бы хорошо?
function BonusGrid(props) {

  if (props.value === undefined) {  
    return (<div/>);
  }

  function change_bonus(e, idx) {
    props.setBonuses([...props.value], props.value[idx].value = e);
  }

  return(
    <div className='bonus-grid'>
      <p className='bonus-grid__title'>Бонусы</p>
      <form className='bonus-grid__form'>
        {props.value.map((bonus, idx) => (
          <label className='bonus-grid__label' key={idx}>{bonus.bonus}
            <input className='bonus-grid__input' type="text" name={bonus.bonus} value={bonus.value} onChange={e => change_bonus(e.target.value, idx)} />
          </label>
        ))}
      </form>
    </div>
  );
}

export default BonusGrid;